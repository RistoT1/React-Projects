import Comment from "../models/comment.model.js";

export const addComment = async (req, res) => {
    const comment = req.body; //sent data

    const newComment = new Comment(comment)

    try {
        await newComment.save();
        return res.status(201).json({ success: true, data: newComment, message: "Kommentti lisätty" });
    } catch (e) {
        if (e.name === "ValidationError") {
            return res.status(400).json({ success: false, message: e.message });
        }
        console.error("Error luodessa kommenttia", e.message);
        return res.status(500).json({ success: false, message: "server error" })
    }
};

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({});
        return res.status(200).json({ success: true, data: comments, message: "kommentit saatu" });
    } catch (error) {
        console.error("Error haettaessa kommenttia", e.message);
        return res.status(500).json({success: false, message: "server error"});
    }
}