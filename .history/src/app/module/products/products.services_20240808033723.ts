import { Product } from "./products.models"

const createProduct = async (payload:string) => {
    const result = await Product.create(payload);
    return result;
}

export const ProductServices = {
    createProduct
}