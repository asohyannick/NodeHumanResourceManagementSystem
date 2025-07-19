import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeePayRoll from "../../../../model/payRoll/payRoll.model";
const updateEmployeePayRoll = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            month,
            year,
            basicSalary,
            allowances,
            deductions,
            netSalary,
            status,
        } = req.body;
        const { id } = req.params;
        const showPayRoll = await EmployeePayRoll.findByIdAndUpdate(id, {
            month,
            year,
            basicSalary,
            allowances,
            deductions,
            netSalary,
            paymentDate: Date.now(),
            status,
        }, { new: true, runValidators: true });
        if (!showPayRoll) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee payroll doesn't exist!",
            })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Employee payroll has been edited and updated successfully!",
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
export default updateEmployeePayRoll;