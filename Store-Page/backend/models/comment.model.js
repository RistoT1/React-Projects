import mongoose from "mongoose";
/*KENTÄT:
- rating: arvosana tuotteelle    (pakollinen)
- comment: commentti 
- image: kuvan URL 
*/

const commentSchema = new mongoose.Schema({
    rating: {
        type: String,
        required: [true, "Arvostelu on pakollinen"],
        trim: true
    },
    comment: {
        type: String
    },
    image1: {
        type: String,
    }
}, {
    timestamps: true //automaattisesti createdAt updatedAt
});

// Luo Mongoose-mallin Comment.
// kokoelman nimi --> Comment (Mongoose tekee monikon automaattisesti)
const comment = mongoose.model('Comment', commentSchema);

export default comment;