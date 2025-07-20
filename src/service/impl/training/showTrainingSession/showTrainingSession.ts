import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TrainingModel from "../../../../model/training/training.model";
const showTrainingSession = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const training = await TrainingModel.findById(id);
        if (!training) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Training session doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message:"A single available employee training session has been fetched successfully!",
            training,
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

export default showTrainingSession;