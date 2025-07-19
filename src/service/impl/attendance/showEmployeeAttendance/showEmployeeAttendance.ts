import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Attendance from "../../../../model/attendance/attendance.model";
const showEmployeeAttendance = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const employeeAttendance = await Attendance.findById(id);
        if (!employeeAttendance) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee attendance doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee attendance has been fetched successfully!",
            employeeAttendance,
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

export default showEmployeeAttendance;