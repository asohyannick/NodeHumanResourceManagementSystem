import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../../../../model/job/job.model";
const updateJob = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            title,
            description,
            location,
            employmentType,
            requiredQualifications,
            preferredQualifications,
            salaryRange,
            applicants,
        } = req.body;
        const { id } = req.params;
        const showJob = await Job.findByIdAndUpdate(id, {
            title,
            description,
            location,
            employmentType,
            requiredQualifications,
            preferredQualifications,
            salaryRange,
            postingDate: Date.now(),
            closingDate: Date.now(),
            applicants,
        }, { new: true, runValidators: true });
        if (!showJob) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Job doesn't exist!"
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee job has been updated successfully!",
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
export default updateJob;