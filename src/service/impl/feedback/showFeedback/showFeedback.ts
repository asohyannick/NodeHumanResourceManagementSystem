import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FeedbackModel from "../../../../model/feedback/feedback.model";
const showFeedback = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const feedback = await FeedbackModel.findById(id);
        if (!feedback) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Feedback doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Feedback message has been fetched successfully!",
            feedback,
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
export default showFeedback;