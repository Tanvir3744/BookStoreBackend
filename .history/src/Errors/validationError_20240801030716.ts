import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interface/error";



const validationError = (err: mongoose.Error.ValidationError) => {
    const errors: IGenericErrorMessage[] = Object.values(err.errors).map(elem => {
        return {
            path: elem.path,
            message: elem.message
        };
    });
    const statusCode: 
}