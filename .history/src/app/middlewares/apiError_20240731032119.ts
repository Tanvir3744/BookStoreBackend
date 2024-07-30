
class ApiError extends Error{
    statusCode: number;
    constructor(statusCode, message, stackk="")
}