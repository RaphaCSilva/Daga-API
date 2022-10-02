import { prisma } from "../database/prismaClient";
import { User } from "@prisma/client"

export type CreateUserData = Omit<User, "id">;

export async function insertUser(user: CreateUserData) {
    return prisma.user.create({
        data: user
    });
}