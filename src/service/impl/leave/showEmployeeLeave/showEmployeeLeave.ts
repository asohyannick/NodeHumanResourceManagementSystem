import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeeLeave from "../../../../model/employee-leave/employee-leave.model";
const showEmployeeLeave = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const employeeLeave = await EmployeeLeave.findById(id);
        if (!employeeLeave) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee leave doesn't exist!"
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee leave has been fetched successfully!",
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

export default showEmployeeLeave;