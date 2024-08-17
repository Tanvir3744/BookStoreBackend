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
    role: string
    needsPasswordChange?: boolean,
}

export type  UserModel = Model<IUser, Record<string, unknown>>