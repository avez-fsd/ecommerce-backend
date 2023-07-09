import { SignUpRequest } from "@interfaces/auth.interface";
import User from "./models/user-model";


export const createUser = (signUpData: SignUpRequest) => {

}

export const getUserByEmail = (email:string) => {
    return User.findOne({
        where: {
            email
        }
    })
}