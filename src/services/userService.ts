import { CreateUserData } from "../repositories/userRepository";
import * as userRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { conflictError, unauthorizedError } from "../utils/errorUtils";

dotenv.config();

export async function signup(user: CreateUserData) {
    await verifyEmailAlreadyRegistered(user.email);
    
    const SALT = 10;
    const encyptedPassword = bcrypt.hashSync(user.password, SALT);
    const data = {
        email: user.email,
        password: encyptedPassword
    }

    await userRepository.insertUser(data);
}

export async function signin(user: CreateUserData) {
    const userInDB = await findUserOrFail(user.email);
    const typedPassword = user.password;
    const encyptedPassword = userInDB.password;

    if(!bcrypt.compareSync(typedPassword, encyptedPassword)){
        return unauthorizedError('Incorrect password or email');
    }

    const token = jwt.sign({ userId: userInDB.id}, process.env.JWT_SECRET);
    return token;
}

async function verifyEmailAlreadyRegistered(email: string) {
    const emailRegistered = userRepository.findUserByEmail(email);

    if(emailRegistered) {
        return conflictError('Email already registered');
    }
}

async function findUserOrFail(email: string) {
    const registeredUser = await userRepository.findUserByEmail(email);
    
    if(!registeredUser) {
        throw { type: "unauthorized", message: "Email need to be registered" };
    }

    return registeredUser;
}