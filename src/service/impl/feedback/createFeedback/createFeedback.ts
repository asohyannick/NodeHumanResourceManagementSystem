import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FeedbackModel from "../../../../model/feedback/feedback.model";
const createFeedback = async (req: Request, res: Response): Promise<Response> => {
    const {
        employeeId,
        trainingSessionId,
        score,
        comments,
        areasOfImprovement,
        followUpActions,
    } = req.body;
    try {
        const newFeedback = new FeedbackModel({
            employeeId,
            trainingSessionId,
            date: Date.now(),
            score,
            comments,
            areasOfImprovement,
            overallSatisfaction:'Very Unsatisfied',
            followUpActions,
        });
        await newFeedback.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Your feedback message has been submitted successfully!",
            newFeedback,
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
export default createFeedback;