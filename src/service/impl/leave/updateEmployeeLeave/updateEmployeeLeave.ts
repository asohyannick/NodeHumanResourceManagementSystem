import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeeLeave from "../../../../model/employee-leave/employee-leave.model";
const updateEmployeeLeave = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            name,
            description,
            maxDays,
            totalDays,
            reason,
            availableDays,
            usedDays,
        } = req.body;
        const { id } = req.params;
        const employeeLeave = await EmployeeLeave.findByIdAndUpdate(id, {
            name,
            description,
            maxDays,
            startDate: Date.now(),
            endDate: Date.now(),
            totalDays,
            reason,
            availableDays,
            usedDays,
        }, { new: true, runValidators: true });
        if (!employeeLeave) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee leave doesn't exist!"
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee leave has been updated successfully!",
            employeeLeave
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

export default updateEmployeeLeave;