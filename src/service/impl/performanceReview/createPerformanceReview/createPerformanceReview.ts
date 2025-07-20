import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Performance from "../../../../model/performance/performance.model";
const createEmployeePerformaceReview = async (req: Request, res: Response): Promise<Response> => {
    const {
        reviewerId,
        reviewPeriod,
        score,
        feedback,
        title,
        description,
        overallScore,
        comments,
    } = req.body;
    try {
        const newPerformanceReview = new Performance({
            reviewerId,
            reviewPeriod,
            reviewDate: Date.now(),
            score,
            feedback,
            title,
            description,
            targetDate: Date.now(),
            achieved: true,
            overallScore,
            comments,
        });
        await newPerformanceReview.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new employee performance review has been created successfully!",
            newPerformanceReview,
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

export default createEmployeePerformaceReview;