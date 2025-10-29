import mongoose from "mongoose";
/*KENTÄT:
- name:  nimi      (pakollinen)
- price: hinta     (pakollinen)
- image: kuvan URL (pakollinen)
*/

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Tuotteen nimi on pakollinen"],
        trim: true
    },
    price:{
        type: Number,
        required: [true, "Tuotteen hinta on pakollinen"],
    },
    image:{
        type:String,
        required: [true, "Tuotteen kuva on pakollinen"],
        trim: true
    }
},{
    timestamps: true //automaattisesti createdAt updatedAt
});

// Luo Mongoose-mallin Product.
// kokoelman nimi --> products (Mongoose tekee monikon automaattisesti)
const Product = mongoose.model('Product', productSchema);

export default Product