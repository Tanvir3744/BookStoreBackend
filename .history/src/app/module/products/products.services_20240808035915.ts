import { Product } from "./products.models"

const createProduct = async (payload:string) => {
    const result = await Product.create(payload);
    return result;
}

const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id);
    return result;
}

export const ProductServices = {
    createProduct
}