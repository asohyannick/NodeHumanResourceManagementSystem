import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeeLeave from "../../../../model/employee-leave/employee-leave.model";
const showEmployeeLeaves = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const employeeLeaves = await EmployeeLeave.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All available employee leaves have been fetched successfully!",
            employeeLeaves
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

export default showEmployeeLeaves;