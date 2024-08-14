import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import SendResponse from "../../../shared/sendResponse";
import { OK } from "http-status";
import { ProductServices } from "./products.services";
import pick from "../../../shared/pick";
import { ProductFilterableFiled } from "./products.constants";
import { paginationFields } from "../../../constants/PaginationFileds";


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
    const paginationOptions = pick(req.query, paginationFields)

    const result = await ProductServices.getAllProducts(filterData, paginationOptions);

    SendResponse(res, {
        statusCode: OK,
        success: true,
        message: "All Prodcuts has been retrived",
        data: result.data,
        meta: result.meta
    });
    next()

});


// update products information partially;
const updateProduct = catchAsync(async (const packageName = require('packageName');) => {
    
})



export const ProductController = {
    createProduct,
    getSingleProduct, 
    getAllProduct
}