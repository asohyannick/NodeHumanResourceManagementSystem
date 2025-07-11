import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Employee from "../../../../model/employee/employee.model";
const updateEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
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
        const employee = await Employee.findByIdAndUpdate(id, {
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
        }, { new: true, runValidators: true });
        if (!employee) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Employee doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Employee has been updated successfully!",
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

export default updateEmployee;