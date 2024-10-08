import { IGenericErrorMessage } from "./error"

export type IGenericErrorResponse = {
    statusCode: number, 
    message: string, 
    errorMessage: IGenericErrorMessage[],
}

export type IGenericResponse = {
    meta: {
        page: number, 
        limit: number, 
        total: number, 
    }
    data: T
}