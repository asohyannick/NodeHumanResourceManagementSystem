import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TrainingModel from "../../../../model/training/training.model";
const updateTrainingSession = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            title,
            description,
            session,
            name,
            email,
            phone,
            duration,
            location,
            trainer,
            participantId,
        } = req.body;
        const { id } = req.params;
        const training = await TrainingModel.findByIdAndUpdate(id, {
            title,
            description,
            session,
            name,
            email,
            phone,
            date: Date.now(),
            duration,
            location,
            trainer,
            status: 'Scheduled',
            participantId,
            registrationDate: Date.now(),
        }, { new: true, runValidators: true });
        if (!training) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Training session doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee training session has been edited and updated successfully!",
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

export default updateTrainingSession;