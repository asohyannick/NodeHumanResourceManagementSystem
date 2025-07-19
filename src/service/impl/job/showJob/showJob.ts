import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../../../../model/job/job.model";
const showJob = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const showJob = await Job.findById(id);
        if (!showJob) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Job doesn't exist!"
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee job has been fetched successfully!",
            showJob
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
export default showJob;