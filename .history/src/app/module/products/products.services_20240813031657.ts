import { Product } from "./products.models"

const createProduct = async (payload:string) => {
    const result = await Product.create(payload);
    return result;
}

const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};

// get all products and create pagination filtering sorting and 
//searching along with this service

export const ProductServices = {
    createProduct,
    getSingleProduct
}