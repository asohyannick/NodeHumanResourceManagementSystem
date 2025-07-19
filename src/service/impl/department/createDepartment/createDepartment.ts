import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Department from "../../../../model/department/department.model";
const createDepartment = async(req: Request, res: Response): Promise<Response> => {
    const { name,description, location, headId, employees, budget, projects} = req.body;
    try {
        const newDepartment = new Department({
            name,
            description,
            location,
            headId,
            employees,
            budget,
            isActive: true,
            projects
        });
        await newDepartment.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message:"A new employee department has been created successfully!",
            newDepartment
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

export default createDepartment;