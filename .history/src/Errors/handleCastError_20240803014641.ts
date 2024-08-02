import mongoose from "mongoose";
import { IGenericErrorResponse } from "../interface/common";

const handleCastError = (err:mongoose.Error.CastError): IGenericErrorResponse => {
    // declare the variable to store the errors with types;
    const errors: IGenericErrorMessage[] = [{path: err.path, message: err.message}]
    
};

export default handleCastError;