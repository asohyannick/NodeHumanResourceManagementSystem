import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Employee from "../../../../model/employee/employee.model";
const createEmployee = async (req: Request, res: Response): Promise<Response> => {
    const {
        firstName,
        lastName,
        middleName,
        gender,
        address,
        contact,
        emergencyContacts,
        employmentDetails,
        leaveBalance,
        skills,
    } = req.body;
    try {
        const newEmployee = new Employee({
            firstName,
            lastName,
            middleName,
            dateOfBirth: Date.now(),
            gender,
            address,
            contact,
            emergencyContacts,
            employmentDetails,
            leaveBalance,
            skills,
            isActive: true,
        });
        await newEmployee.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new employee has been created successfully!",
            newEmployee,
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

export default createEmployee;