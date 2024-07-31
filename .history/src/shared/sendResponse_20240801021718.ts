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

type SendReponse = <T>(res: Response, data: IApiResponse<T>): void => {
    const ResponseData: IApiResponse<T> = {

    } 
} 