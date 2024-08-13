import { IGenericResponse } from "../../../interface/common";
import { IPaginationOptions } from "../../../interface/pagination.interface";
import { ProductSearchableFiled } from "./products.constants";
import { IProduct, IProductFilter } from "./products.interface";
import { Product } from "./products.models"

const createProduct = async (payload:IProduct) => {
    const result = await Product.create(payload);
    return result;
}

const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};

// get all products and create pagination filtering sorting and
//searching along with this service

const getAllProducts = (filters: IProductFilter, paginationOptions: IPaginationOptions): Promise<IGenericResponse<IProduct>> => {
    const { searchTerm, ...filtersData } = filters;
    
    // implement search functionalities ;

    const searchAndPaginationCondition = [];

    if (searchTerm) {
        searchAndPaginationCondition.push({
            $or: ProductSearchableFiled.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i"                }
            }))
        })
    };

}
export const ProductServices = {
    createProduct,
    getSingleProduct, 
    getAllProducts
}