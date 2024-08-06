import{model, Model, Schema} from "mongoose"
import { IUser, UserModel } from "./user.interface"

const userSchema = new Schema<IUser>({
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    }
});



export const User = model<IUser, UserModel>('User', userSchema) 