import { Response } from "express";

type IApiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    meta?: {
        page: number,
        limit: number,
        total: number;
    };
    data?: T | null;
}

const SendResponse = <T>(res: Response, data: IApiResponse<T>) => {
    const responseData:IApiResponse<T> = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        meta: data.meta | null,
        data: data.data | null | undefined
    } 
    res.status(data.statusCode).json(responseData)
} 