import { User } from "@prisma/client"

export type CreateUserData = Omit<User, "id">;

export async function signup(user: CreateUserData) {
    
}

export async function signin(user: CreateUserData) {
    
}