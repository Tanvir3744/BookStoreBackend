import { Schema } from "mongoose";

const AuthorSchema = new Schema({
    name: {
        type: String, 
        required: true, 
    },
    bio: {
        type: String,
        required: true, 
    },
    date_of_birth: {
        type: String, 
        required: true,
    }
})