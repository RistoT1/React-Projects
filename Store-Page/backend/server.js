import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); //allow to accept json data to req.body

app.use("/api/products",productRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`);
        });
    } catch (e) {
        console.error("Virhe yhdistäessä tietokantaan:", e.message);
        process.exit(1);
    }
};

startServer();