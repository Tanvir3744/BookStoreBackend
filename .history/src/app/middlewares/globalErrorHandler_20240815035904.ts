import { ErrorRequestHandler } from "express";
import { IGenericErrorMessage } from "../../interface/error";
import validationError from "../../Errors/validationError";
import handleCastError from "../../Errors/handleCastError";

const globalErrorHandler: ErrorRequestHandler = (err, req: Request, res: Response ) => {
    let statusCode: 500;
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
    }
}