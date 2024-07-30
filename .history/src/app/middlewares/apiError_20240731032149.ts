
class ApiError extends Error{
    statusCode: number;
    constructor(statusCode: number, message: string | undefined, stackk = "") {
        super(message);
    }
}