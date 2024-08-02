import { ZodError, ZodIssue} from "zod";
import { IGenericErrorMessage } from "../interface/error";

const handleZodError = (err: ZodError) : IGenericErrorMessage=> {
    const errors: IGenericErrorMessage[] = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue.path,
            message: issue.message,
        }
    })

};

export default handleZodError;