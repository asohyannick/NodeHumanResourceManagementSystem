import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Department from "../../../../model/department/department.model";
const showDepartment = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.body;
        const showDepartment = await Department.findById(id);
        if (!showDepartment) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee department doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message:"A single employee department has been fetched successfully!",
            showDepartment
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

export default showDepartment;