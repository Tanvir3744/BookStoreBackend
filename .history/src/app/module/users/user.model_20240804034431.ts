import{Schema} from "mongoose"
import { IUser } from "./user.interface"

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

})