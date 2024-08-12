import { SortOrder } from "mongoose"

export type IOptions = {
    page?: number, 
    limit?: number, 
    sortBy?: string, 
    sortOrder?:SortOrder 
}