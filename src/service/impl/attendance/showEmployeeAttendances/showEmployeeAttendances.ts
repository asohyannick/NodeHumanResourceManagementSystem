import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Attendance from "../../../../model/attendance/attendance.model";
const showEmployeeAttendances = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const employeeAttendances = await Attendance.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All available employee attendances have been fetched successfully!",
            employeeAttendances,
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

export default showEmployeeAttendances;