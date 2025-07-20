import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FeedbackModel from "../../../../model/feedback/feedback.model";
const updateFeedback = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            employeeId,
            trainingSessionId,
            score,
            comments,
            areasOfImprovement,
            followUpActions,
        } = req.body;
        const { id } = req.params;
        const feedback = await FeedbackModel.findByIdAndUpdate(id, {
            employeeId,
            trainingSessionId,
            date: Date.now(),
            score,
            comments,
            areasOfImprovement,
            overallSatisfaction: 'Very Unsatisfied',
            followUpActions,
        }, { new: true, runValidators: true });
        if (!feedback) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Feedback doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Feedback message has been edited and updated successfully!",
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
export default updateFeedback;