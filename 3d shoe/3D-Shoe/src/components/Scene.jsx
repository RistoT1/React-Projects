import { useRef, useLayoutEffect, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

//objektit ja niiden materiaalit
//Voisi tehdä myös loopilla jos materiaalit olisi samalla tyylillä nimetty.
const selectableObjects = {
    karkisivu: "KarkiSivuMateriaali",
    nauhat: "NauhaMaterial",
    nikeairlogo: "NikeAirLogoMateriaali",
    nikelogo: "NikeLogoMaterial",
    pohja: "PohjaMateriaali",
    pohjasivu: "PohjaSivuMateriaali",
    sisapaallys: "white",
    solenauhapohja: "SoleNauhaPohjaMateriaali",
    solenauhaymparys: "SoleNauhaYmparysMateriaali",
    solepaallys: "soleMateriaali",
    takamuoto: "TakaMuotoMateriaali",
};

export default function Scene({ color, selected, setSelected, colorChanged }) {
    const ref = useRef();
    const gltf = useGLTF("/models/kenkav2.glb");

    //luo bounding boxin ja keskittää objektin kiertopisteen
    useLayoutEffect(() => {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);
        gltf.scene.position.y -= box.min.y;
    }, [gltf.scene]);

    //Käy läpi objektin child elementit ja tekee kaikki meshit joilla on nimi, klikattaviksi
    useEffect(() => {
        gltf.scene.traverse((obj) => {
            if (obj.isMesh && selectableObjects[obj.name]) {
                //luo uuden flagin, jonka tarkituksena määrittää objekti clikattavaksi
                obj.userData.clickable = true;
            }
        });
    }, [gltf.scene]);

    useFrame(() => {
    
        gltf.scene.traverse((obj) => {
            if (!obj.isMesh || !selectableObjects[obj.name]) return;

            const isSelected = obj === selected;

            if (isSelected && !colorChanged) {
                // Show yellow highlight when selected but color hasn't changed
                obj.material.emissive.setHex(0xffff00);
                obj.material.emissiveIntensity = 0.5;
            } else {
                // Remove yellow highlight
                obj.material.emissive.setHex(0x000000);
                obj.material.emissiveIntensity = 0;
                
                // Apply new color if this is the selected object and color was changed
                if (isSelected && colorChanged) {
                    obj.material.color.set(color);
                }
            }
        });
    });

    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            scale={1}
            onPointerOver={(e) => {
                if (selectableObjects[e.object.name]) {
                    e.stopPropagation();
                    document.body.style.cursor = "pointer";
                }
            }}
            onPointerOut={() => {
                document.body.style.cursor = "auto";
            }}
            onPointerDown={(e) => {
                e.stopPropagation();
                if (selectableObjects[e.object.name]) {
                    setSelected(e.object);
                }
            }}
        />
    );
}