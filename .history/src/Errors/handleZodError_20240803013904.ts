import { ZodError, ZodIssue } from "zod";

const handleZodError = (err: ZodError) => {
    const errors = err.issues.map(issue:ZodIssue)

};

export default handleZodError;