import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Employee from "../../../../model/employee/employee.model";
const showEmployees = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const employees = await Employee.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Employees have been fetched successfully!",
            employees
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

export default showEmployees;