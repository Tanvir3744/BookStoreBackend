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
};

const calculatePagination = (options: IOptions): IOptionsResults => {
    const page = options.page;
    const limit = options.limit;
    const skip = (page -1 ) * limit
};

export const paginationHelpers = {
    calculatePagination
}