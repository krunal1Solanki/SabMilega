import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect('mongodb+srv://DeveloperTest:Developer2022DD@cluster0.puyhapm.mongodb.net/testingDb');
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("MongoDb Connected Successfully")
        })
        connection.on('error', (err) => {
            console.log("Connection Error", err.message)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong", error.message);
    }
}