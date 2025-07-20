import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Recruitment from "../../../../model/recruitment/recruitment.model";
const createJobPosting = async (req: Request, res: Response): Promise<Response> => {
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
    try {
        const newJobPosting = new Recruitment({
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
        });
        await newJobPosting.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new job posting has been created successfully!",
            newJobPosting,
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

export default createJobPosting;