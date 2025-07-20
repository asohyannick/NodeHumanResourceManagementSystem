import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Performance from "../../../../model/performance/performance.model";
const updateEmployeePerformaceReview = async (req: Request, res: Response): Promise<Response> => {
    try {
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
        const { id } = req.params;
        const performanceReview = await Performance.findByIdAndUpdate(id, {
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
        }, { new: true, runValidators: true });
        if (!performanceReview) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee performance review doesn't exist!",
            })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee performance review has been edited and updated successfully!",
            performanceReview
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

export default updateEmployeePerformaceReview;