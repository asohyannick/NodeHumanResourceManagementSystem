import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../../../../model/job/job.model";
const showJobs = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const showJobs = await Job.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All available employee jobs have been fetched successfully!",
            showJobs
        });
    } catch (error) {
        console.error("Error occured!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown  Error Message",
        });
    }
}
export default showJobs;