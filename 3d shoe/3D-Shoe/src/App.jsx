import React, { useState, useLayoutEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import Scene from "./components/Scene";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#ff4444");
  const [colorChanged, setColorChanged] = useState(false);
  const isUpdatingFromSelection = useRef(false);

  const [controls, set] = useControls(() => ({
    meshColor: {
      value: selectedColor,
      onChange: (val) => {
        setSelectedColor(val);
        if (!isUpdatingFromSelection.current) {
          setColorChanged(true);
        }
      },
      label: "Mesh Color",
    },
  }));

  useLayoutEffect(() => {
    if (selected?.material?.color) {
      const hex = `#${selected.material.color.getHexString()}`;
      isUpdatingFromSelection.current = true;
      set({ meshColor: hex });
      setSelectedColor(hex);
      setColorChanged(false);
      isUpdatingFromSelection.current = false;
    }
  }, [selected, set]);

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", justifyContent: "center" }}>
      <Leva collapsed={false} />
      <Canvas
        camera={{ position: [5, 2, 5], fov: 5 }}
        style={{ width: "100%", height: "100vh", background: "#1a1a1a" }}
        onPointerMissed={() => {
          setSelected(null);
          setColorChanged(false);
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Scene
          color={selectedColor}
          selected={selected}
          setSelected={setSelected}
          colorChanged={colorChanged}
        />
        <OrbitControls target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}