import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeePayRoll from "../../../../model/payRoll/payRoll.model";
const createEmployeePayRoll = async(req: Request, res: Response): Promise<Response> => {
    const {
        month,
        year,
        basicSalary,
        allowances,
        deductions,
        netSalary,
        status,
    } = req.body;
    try {
        const newEmployeePayRoll = new EmployeePayRoll({
            month,
            year,
            basicSalary,
            allowances,
            deductions,
            netSalary,
            paymentDate: Date.now(),
            status,
        });
        await newEmployeePayRoll.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new employee payroll has been created successfully!",
            newEmployeePayRoll,
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
export default createEmployeePayRoll;