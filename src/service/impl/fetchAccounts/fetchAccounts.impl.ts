import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Auth from "../../../model/auth/auth.model";
const fetchAccounts = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const users = await Auth.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User accounts have been fetched successfully!",
            users,
        });
    } catch (error) {
        console.error("Error occured!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error Message",
        });
    }
}

export default fetchAccounts;