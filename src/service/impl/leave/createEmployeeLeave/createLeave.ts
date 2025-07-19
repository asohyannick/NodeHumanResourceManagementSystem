import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeeLeave from "../../../../model/employee-leave/employee-leave.model";
const createEmployeeLeave = async (req: Request, res: Response): Promise<Response> => {
    const {
        name,
        description,
        maxDays,
        totalDays,
        reason,
        availableDays,
        usedDays,
    } = req.body;
    try {
        const newLeave = new EmployeeLeave({
            name,
            description,
            maxDays,
            startDate: Date.now(),
            endDate: Date.now(),
            totalDays,
            reason,
            availableDays,
            usedDays,
        });
        await newLeave.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new employee leave has been apply successfully!",
            newLeave
        })
    } catch (error) {
        console.error("Error occured", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error Message",
        });
    }
}

export default createEmployeeLeave;