import express from "express";
import { addProduct, deleteProduct, getProducts, updateProduct,getProductById } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);               // Hakee kaikki tuotteet.
router.get("/:id", getProductById); 
router.post("/", addProduct);               // Lisää uuden tuotteen.
router.put("/:id", updateProduct);          // päivittää tuotteen ID:n perusteella.
router.delete("/:id", deleteProduct);       // Poistaa tuotteen ID:n perusteella.

export default router;