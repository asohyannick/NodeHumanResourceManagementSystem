import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const backendServerErrorHandler = (_req: Request, res: Response) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Internal Server Error!",
        status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
}

export default backendServerErrorHandler;