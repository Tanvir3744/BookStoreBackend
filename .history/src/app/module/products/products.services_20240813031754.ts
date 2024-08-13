import { IProduct } from "./products.interface";
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

const getAllProducts = () => {

}
export const ProductServices = {
    createProduct,
    getSingleProduct
}