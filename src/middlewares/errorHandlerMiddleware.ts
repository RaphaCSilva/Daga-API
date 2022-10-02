import { NextFunction, Request, Response } from "express";
import { 
    AppError, 
    errorTypeToStatusCode,
    isAppError 
} from "../utils/errorUtils";

export default function errorHandlerMiddleware(
    error: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (isAppError(error)){
        return res.status(errorTypeToStatusCode(error.type)).send(error.message);
    }

    return res.sendStatus(500);
}