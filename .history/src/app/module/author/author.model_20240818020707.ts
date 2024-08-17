import mongoose, { Schema } from "mongoose";

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
    }, 
    nationality: {
        type: String, 
        required: true, 
    },
    booksWritten: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true, 
    },
    website: {
        type: String,
        required: true, 
    }
})