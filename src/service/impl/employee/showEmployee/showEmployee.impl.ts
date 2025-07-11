import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Employee from "../../../../model/employee/employee.model";
const showEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Employee doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Employee has been fetched successfully!",
            employee
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

export default showEmployee;