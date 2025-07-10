import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Auth from "../../../model/auth/auth.model";
const fetchAccount = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const user = await Auth.findById(id);
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "User's account doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User account has been fetched successfully!",
            user,
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

export default fetchAccount;