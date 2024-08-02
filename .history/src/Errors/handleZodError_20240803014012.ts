import { ZodError, ZodIssue} from "zod";
import { IGenericErrorMessage } from "../interface/error";

const handleZodError = (err: ZodError) => {
    const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue.path,
            message: issue.message,
        }
    })

};

export default handleZodError;