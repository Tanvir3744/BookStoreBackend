import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interface/error";
import { NOT_FOUND } from "http-status";



const validationError = (err: mongoose.Error.ValidationError) => {
    const errors: IGenericErrorMessage[] = Object.values(err.errors).map(elem => {
        return {
            path: elem.path,
            message: elem.message
        };
    });
    const statusCode = NOT_FOUND;

    return {
        statusCode,
        message: "validationError",
        errorMessage: errors,
    }
}

export default validationError;