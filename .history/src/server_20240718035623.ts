import mongoose from "mongoose";
import config from "./config";
import app from './app';

async function main() {
    try {
        await mongoose.connect(config.database_url as string)

        console.log("Database has been connected !");

        //listening the port 
        app.listen(config.port, () => {
            console.log(`App listening on port ${config.port}` )
        })
        
    } catch (error) {
        console.log("database won't connect", error)
    }
}