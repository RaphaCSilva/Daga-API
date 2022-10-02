import { Router } from "express";

const userRouter = Router();

userRouter.post('/sign-up');
userRouter.post('/sign-in');

export default userRouter;