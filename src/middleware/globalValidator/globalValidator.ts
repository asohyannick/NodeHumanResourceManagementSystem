import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { StatusCodes } from "http-status-codes";
const globalValidator = (schema: AnySchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validate(req.body, { abortEarly: false });
            next();
        } catch (error) {
            console.error("Validation Error Occured!", error);
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: "Validation failed",
                error: error instanceof Error ? error.message : "Unknown Error Message",
            });
        }
    }
}

export default globalValidator;