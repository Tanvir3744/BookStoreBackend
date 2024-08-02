import { ZodError, ZodIssue} from "zod";
import { IGenericErrorMessage } from "../interface/error";
import { IGenericErrorResponse } from "../interface/common";

const handleZodError = (err: ZodError) : IGenericErrorResponse=> {
    const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue.path,
            message: issue.message,
        }
    })

};

export default handleZodError;