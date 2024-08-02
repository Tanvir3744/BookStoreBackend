import { ZodError, ZodIssue} from "zod";

const handleZodError = (err: ZodError) => {
    const errors = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue.path,
            message: issue.message
        }
    })

};

export default handleZodError;