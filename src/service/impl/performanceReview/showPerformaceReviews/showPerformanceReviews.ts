import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Performance from "../../../../model/performance/performance.model";
const showEmployeePerformaceReviews = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const performanceReviews = await Performance.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All available employee performance reviews have been fetched successfully!",
            performanceReviews
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

export default showEmployeePerformaceReviews;