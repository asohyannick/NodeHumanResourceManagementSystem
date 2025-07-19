import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../../../../model/job/job.model";
const createJob = async (req: Request, res: Response): Promise<Response> => {
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
    try {
        const newJob = new Job({
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
        });
        await newJob.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new employee job has been created successfully!",
            newJob
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
export default createJob;