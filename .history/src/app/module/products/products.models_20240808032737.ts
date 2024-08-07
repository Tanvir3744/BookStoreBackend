import { Schema } from "mongoose";


const prodcutSchema = new Schema({
    title: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    price: {
        type: Number, 
        required: true, 
    }, 
    publication_Date: {
        type: Date
    }, 
    description: {
        type: String, 
        required: true, 
    },
    language: {
        type: String, 
        required: true, 
    },
    pages: {
        type: Number, 
        required: true, 
    }, 
    stock: {
        type: Number, 
        required: true
    },{
    timestamps: true, 
    toJSON: {
            virtuals: true
        }
    }

})