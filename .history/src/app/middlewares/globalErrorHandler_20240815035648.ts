import { ErrorRequestHandler } from "express";
import { IGenericErrorMessage } from "../../interface/error";
import validationError from "../../Errors/validationError";

const globalErrorHandler: ErrorRequestHandler = (err, req: Request, res: Response ) => {
    let statusCode: 500;
    let message = "something went wrong";
    let errorMessages: IGenericErrorMessage[] = [];

    if (err?.name === "ValidationError") {
        const simplifiedError = validationError(err)
        statusCode = simplifiedError.statusCode;

    }
}