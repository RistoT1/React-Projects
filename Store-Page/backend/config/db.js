import mongoose from "mongoose"
// yhdistää tietokantaan(MongoDB)
export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`)

    } catch (e) {
        console.error(`Tietokantayhteys virhe: ${e.message}`);
        process.exit(1); //process code 1 = failure, 0 = success
    }
}