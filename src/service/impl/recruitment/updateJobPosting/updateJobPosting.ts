import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Recruitment from "../../../../model/recruitment/recruitment.model";
const updateJobPosting = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            jobId,
            title,
            description,
            requirements,
            location,
            name,
            email,
            phone,
            resumeUrl,
            appliedPosition,
            interviewId,
            candidateId,
            interviewers,
            feedback,
            score,
        } = req.body;
        const { id } = req.params;
        const showJobPosting = await Recruitment.findByIdAndUpdate(id, {
            jobId,
            title,
            description,
            requirements,
            location,
            openingDate: Date.now(),
            closingDate: Date.now(),
            name,
            email,
            phone,
            resumeUrl,
            appliedPosition,
            applicationDate: Date.now(),
            status: 'Applied',
            interviewId,
            candidateId,
            interviewDate: Date.now(),
            interviewers,
            feedback,
            score,
        }, { new: true, runValidators: true });
        if (!showJobPosting) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Job posting doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available job posting has been edited and updated successfully from the backend and database management system!",
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

export default updateJobPosting;