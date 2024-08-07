import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import SendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";


const createProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // extract product data from the requests body;
    const { ...productsData } = req.body;
    // send data to the services;
    const result = await ProductServices(productsData);
    SendResponse(res, {
        statusCode: OK, 
        success: true, 
        message: "Product has been created", 
        data: result;
    })
});

export const ProductController = {
    createProduct,
}