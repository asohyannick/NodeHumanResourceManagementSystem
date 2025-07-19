import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeePayRoll from "../../../../model/payRoll/payRoll.model";
const showEmployeePayRoll = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id }  = req.params;
        const showPayRoll = await EmployeePayRoll.findById(id);
        if (!showPayRoll) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee payroll doesn't exist!",
            })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Employee payroll has been fetched successfully!",
            showPayRoll,
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
export default showEmployeePayRoll;