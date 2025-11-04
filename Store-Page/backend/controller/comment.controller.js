import Comment from "../models/comment.model.js";

export const addcomment = async (req, res) => {
    const comment = req.body; //sent data

    const newComment = new Comment(comment)

    try {
        await newComment.save();
        return res.status(201).json({ success: true, data: newComment, message: "Tuote lisätty", });
    } catch (e) {
        if (e.name === "ValidationError") {
            return res.status(400).json({ success: false, message: e.message });
        }
        console.error("Error luodessa Tuotetta ", e.message);
        return res.status(500).json({ success: false, message: "server error" })
    }
};