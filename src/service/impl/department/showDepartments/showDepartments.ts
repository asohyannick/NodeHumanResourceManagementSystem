import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Department from "../../../../model/department/department.model";
const showDepartments = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const showDepartments = await Department.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message:"All employee departments have been fetched successfully!",
            showDepartments
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

export default showDepartments;