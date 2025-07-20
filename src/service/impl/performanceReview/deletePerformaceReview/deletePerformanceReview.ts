import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Performance from "../../../../model/performance/performance.model";
const deleteEmployeePerformaceReview = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const performanceReview = await Performance.findByIdAndDelete(id);
        if (!performanceReview) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee performance review doesn't exist!",
            })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee performance review has been deleted successfully!",
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

export default deleteEmployeePerformaceReview;