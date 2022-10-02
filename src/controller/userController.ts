import { Request, Response } from "express";
import { signin, signup } from "../services/userService";


export async function createUser (req: Request, res: Response) {
    const user = req.body;
    await signup(user);

    res.sendStatus(201);
}

export async function login (req: Request, res: Response) {
    const user = req.body;
    const token = await signin(user);

    res.status(200).send(token);
}