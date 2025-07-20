import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Recruitment from "../../../../model/recruitment/recruitment.model";
const showJobPostings = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const showJobPostings = await Recruitment.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All available job postings have been fetched successfully from the backend and database management system!",
            showJobPostings,
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

export default showJobPostings;