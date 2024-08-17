import { ObjectId, Types } from "mongoose"
import { IProduct } from "../products/products.interface"

export type IAuthor = {
    name: string, 
    bio: string, 
    date_of_birth: string, 
    nationality: string, 
    bookswritten?: Types.ObjectId | IProduct,
    website: string, 

}
 
