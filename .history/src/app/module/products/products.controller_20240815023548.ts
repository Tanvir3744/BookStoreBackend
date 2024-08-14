import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import SendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";
import { ProductServices } from "./products.services";
import pick from "../../../shared/pick";
import { ProductFilterableFiled } from "./products.constants";


const createProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // extract product data from the requests body;
    const { ...productsData } = req.body;
    // send data to the services;
    const result = await ProductServices.createProduct(productsData);
    SendResponse(res, {
        statusCode: OK,
        success: true,
        message: "Product has been created",
        data: result
    });
    next()
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProductServices.getSingleProduct(id);
    SendResponse(res, {
        statusCode: OK,
        success: true,
        message: "product retrived successfully",
        data: result
    })
});

const getAllProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const filterData = pick(req.query, ProductFilterableFiled);

})

/* const getAllProducts = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
     const result 
})
 */
export const ProductController = {
    createProduct,
    getSingleProduct, 
    getAllProduct
}