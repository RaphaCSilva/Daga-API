import { Router } from "express";
import { createUser, login } from "../controller/userController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { createUserSchema } from "../schemas/createUserSchema";
import { loginSchema } from "../schemas/loginSchema";

const userRouter = Router();

userRouter.post('/sign-up', validateSchemaMiddleware(createUserSchema), createUser);
userRouter.post('/sign-in', validateSchemaMiddleware(loginSchema), login);

export default userRouter;