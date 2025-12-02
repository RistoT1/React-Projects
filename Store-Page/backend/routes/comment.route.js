import express from "express";
import { addComment,getComments} from "../controller/comment.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/", authMiddleware, getComments);
router.post("/", authMiddleware, addComment);

export default router;
