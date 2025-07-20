import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Recruitment from "../../../../model/recruitment/recruitment.model";
const showJobPosting = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const showJobPosting = await Recruitment.findById(id);
        if (!showJobPosting) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Job posting doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available job posting has been fetched successfully from the backend and database management system!",
            showJobPosting,
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

export default showJobPosting;