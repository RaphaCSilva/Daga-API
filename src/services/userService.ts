import { CreateUserData } from "../repositories/userRepository";
import * as userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";
import { conflictError } from "../utils/errorUtils";

export async function signup(user: CreateUserData) {
    await verifyEmailAlreadyRegistered(user.email);
    
    const SALT = 10;
    const encyptedPassword = bcrypt.hashSync(user.password, SALT);
    const data {
        email: user.email,
        password: encyptedPassword
    }

    await userRepository.insertUser(data);
}

export async function signin(user: CreateUserData) {

}

async function verifyEmailAlreadyRegistered(email: string) {
    const emailRegistered = userRepository.findUserByEmail(email);

    if(emailRegistered) {
        return conflictError('Email already registered');
    }
}