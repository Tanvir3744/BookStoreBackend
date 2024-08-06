import { Model } from "mongoose"

type IUserName = {
    firstName: string, 
    lastName: string, 
}
export type IUser = {
    name: IUserName, 
    email: string, 
    password: string, 
    phoneNumber: string, 
}

export type  UserModel = Model<IUser, Record<string, unknown>>