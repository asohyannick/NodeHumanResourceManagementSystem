import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import EmployeePayRoll from "../../../../model/payRoll/payRoll.model";
const showEmployeePayRolls = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const showPayRolls = await EmployeePayRoll.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Employee payrolls have been fetched successfully!",
            showPayRolls,
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
export default showEmployeePayRolls;