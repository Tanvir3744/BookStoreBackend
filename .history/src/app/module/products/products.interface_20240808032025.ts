import { Model } from "mongoose"

export type IProduct = {
    title: string, 
    price: number, 
    publication_Date: string, 
    description: string, 
    language: string, 
    pages: number, 
    stock: number, 
}

export const ProductModel = Model<IProduct, Record<string, unknown>> 

export type IProductFilter = {
    searchTerm?: string, 
}