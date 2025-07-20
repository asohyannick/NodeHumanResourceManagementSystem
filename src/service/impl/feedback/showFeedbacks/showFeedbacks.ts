import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FeedbackModel from "../../../../model/feedback/feedback.model";
const showFeedbacks = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const feedbacks = await FeedbackModel.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Your feedback message has been submitted successfully!",
            feedbacks,
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
export default showFeedbacks;