import mongoose, { model, Schema } from "mongoose";
import { AuthorModel, IAuthor } from "./author.interface";

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
});

export const Author = model<IAuthor, AuthorModel>("Author", AuthorSchema);