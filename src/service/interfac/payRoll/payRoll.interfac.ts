import { Document, Types } from "mongoose";
export interface IPayroll extends Document {
    employeeId: Types.ObjectId; // Reference to the Employee entity
    month: string; // Month for the payroll (e.g., "2023-07")
    year: number; // Year for the payroll
    basicSalary: number; // Basic salary of the employee
    allowances: number; // Total allowances for the employee
    deductions: number; // Total deductions (e.g., taxes, benefits)
    netSalary: number; // Final salary after deductions
    paymentDate: Date; // Date when the payment was made
    status: 'Paid' | 'Pending' | 'Failed'; // Status of the payroll
}
