import { ZodError, ZodIssue} from "zod";
import { IGenericErrorMessage } from "../interface/error";
import { IGenericErrorResponse } from "../interface/common";
import { NOT_FOUND } from "http-status";

const handleZodError = (err: ZodError) : IGenericErrorResponse=> {
    const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue.path,
            message: issue.message,
        }
    });

    const statusCode = NOT_FOUND;
    return {
        statusCode,
        message: "zod Error Occured",
        errorMessages: errors
    }

};

export default handleZodError;