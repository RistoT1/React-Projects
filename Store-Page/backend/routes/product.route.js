import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { requireRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

//kaikille sallittu
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin-only
router.post("/", authMiddleware, requireRole("admin"), addProduct);
router.put("/:id", authMiddleware, requireRole("admin"), updateProduct);
router.delete("/:id", authMiddleware, requireRole("admin"), deleteProduct);

export default router;
