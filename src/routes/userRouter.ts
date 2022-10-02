import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/createUserSchema";
import { loginSchema } from "../schemas/loginSchema";

const userRouter = Router();

userRouter.post('/sign-up', validateSchemaMiddleware(createUserSchema));
userRouter.post('/sign-in', validateSchemaMiddleware(loginSchema));

export default userRouter;