import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Attendance from "../../../../model/attendance/attendance.model";
const createEmployeeAttendance = async (req: Request, res: Response): Promise<Response> => {
    const {
        totalPresent,
        totalAbsent,
        totalLeave,
        totalHolidays,
        status,
        reason,
    } = req.body;
    try {
        const newEmployeeAttendance = new Attendance({
            totalPresent,
            totalAbsent,
            totalLeave,
            totalHolidays,
            date: Date.now(),
            checkInTime: Date.now(),
            checkOutTime: Date.now(),
            status,
            reason,
        });
        await newEmployeeAttendance.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new employee attendance has been created successfully!",
            newEmployeeAttendance,
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

export default createEmployeeAttendance