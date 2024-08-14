import { ErrorRequestHandler } from "express";
import { IGenericErrorMessage } from "../../interface/error";
import validationError from "../../Errors/validationError";
import handleCastError from "../../Errors/handleCastError";
import { ZodError } from "zod";
import handleZodError from "../../Errors/handleZodError";
import ApiError from "./apiError";
import config from "../../config";

const globalErrorHandler: ErrorRequestHandler = (err, req: Request, res: Response) => {

    config.env === 'development'
    ? console.log('global error handler', err)
        : console.log('global error handler', err)
    
    let statusCode = 500;
    let message = "something went wrong";
    let errorMessages: IGenericErrorMessage[] = [];

    if (err?.name === "ValidationError") {
        const simplifiedError = validationError(err)
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessage;
    } else if (err.name === "CastError") {
        const simplifiedError = handleCastError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    } else if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    } else if (err instanceof ApiError) {
        statusCode = err.statusCode;
        message = err?.message;
        errorMessages = err?.message ? [{ path: '', message: err?.message }] : [];
    } else if (err instanceof Error) {
        message = err.message;
        errorMessages = err?.message ? [{ path: '', message: err?.message }] : [];
    }

    //making a patter to genrate error through this function and show them if there any error occurs;
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages, 
        stack: config.env !== "production" ? err.stack : undefined;
        })
}

export default globalErrorHandler;