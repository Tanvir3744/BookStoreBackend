import mongoose from "mongoose";
import config from "./config";

async function main() {
    try {
        await mongoose.connect(config.database_url)
    } catch (error) {
        
    }
}