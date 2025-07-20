import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TrainingModel from "../../../../model/training/training.model";
const showTrainingSessions = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const trainings = await TrainingModel.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All available employee training sessions have been fetched successfully!",
            trainings,
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

export default showTrainingSessions;