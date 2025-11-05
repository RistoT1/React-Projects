import express from "express";
import { addComment, getComments } from "../controller/comment.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// kirjautuneet käyttäjät
router.get("/:productId", authMiddleware, getComments);
router.post("/:productId", authMiddleware, addComment);

export default router;
