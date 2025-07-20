import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import TrainingModel from "../../../../model/training/training.model";
const createTrainingSession = async (req: Request, res: Response): Promise<Response> => {
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
    try {
        const newJobPosting = new TrainingModel({
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
        });
        await newJobPosting.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new training session has been created successfully!",
            newJobPosting,
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

export default createTrainingSession;