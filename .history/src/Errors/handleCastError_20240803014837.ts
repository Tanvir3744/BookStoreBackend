import mongoose from "mongoose";
import { IGenericErrorResponse } from "../interface/common";
import { NOT_FOUND } from "http-status";

const handleCastError = (err:mongoose.Error.CastError): IGenericErrorResponse => {
    // declare the variable to store the errors with types;
    const errors: IGenericErrorMessage[] = [{ path: err.path, message: "Invalid Object ID" }];
    
    //declare the status code is not found
    const statusCode = NOT_FOUND;
    return {
        statusCode, 
        message: "Cast Error Occured",
        errorMessages: errors,
    }
    
};

export default handleCastError;