import Product from "../models/product.model.js";
import mongoose from "mongoose";
/*Routing requestit tietokannasta. 
getProducts --> Hakee kaikki tietokannan (product kokoelman) rivit
addProduct --> Lisää käyttäjän tuotteen product kokoelmaan.
updateProduct --> Päivittää käyttäjän tuotteen, tuotteen Id:tä hyödyntäen.
DeleteProduct --> Poistaa käyttäjän tuotteen, tuotteen Id:tä hyödyntäen.
*/

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, data: products, message: "Tuotteet saatu", })
    } catch (e) {
        console.error("Error haettaessa tuotteita ", e.message);
        return res.status(500).json({ success: false, message: "server error" })
    }
};

export const addProduct = async (req, res) => {
    const product = req.body; //send data

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        return res.status(201).json({ success: true, data: newProduct, message: "Tuote lisätty", });
    } catch (e) {
        if (e.name === "ValidationError") {
            return res.status(400).json({ success: false, message: e.message });
        }
        console.error("Error luodessa Tuotetta ", e.message);
        return res.status(500).json({ success: false, message: "server error" })
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Virheellinen ID" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Tuotetta ei löydy" })
        }
        return res.status(200).json({ success: true, data: updatedProduct, message: "Tuote päivitetty", });
    }
    catch (e) {
        console.error("Error päivittäessä tuotetta", e.message)
        return res.status(500).json({ success: false, message: "server error" })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Virheellinen ID" })
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Tuotetta ei löydy" })
        }

        return res.status(200).json({ success: true, message: "Tuote Poistettu" });
    } catch (e) {
        console.error("Error poistaessa tuotetta", e.message);
        return res.status(500).json({ success: false, message: "server error" });
    }
};