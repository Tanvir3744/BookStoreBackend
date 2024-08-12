import { SortOrder } from "mongoose"

export type IOptions = {
    page?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: SortOrder
};

type IOptionsResults = {
    page?: number,
    limit?: number, 
    skip: number,
    sortBy?: string, 
    sortOrder?: SortOrder
}