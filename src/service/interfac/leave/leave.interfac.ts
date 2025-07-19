import { Document, Types } from "mongoose";
export interface IEmployeeLeave extends Document {
    employeeId: Types.ObjectId; // Reference to the Employee entity
    name: string; // Name of the leave type (e.g., Annual Leave, Sick Leave)
    description?: string; // Optional description of the leave type
    maxDays: number; // Maximum number of days allowed for this leave type
    startDate: Date; // Start date of the leave
    endDate: Date; // End date of the leave
    totalDays: number; // Total number of leave days requested
    status: 'Pending' | 'Approved' | 'Rejected'; // Status of the leave request
    reason?: string; // Optional reason for the leave reques
    availableDays: number; // Number of available days for this leave type
    usedDays: number; // Number of days already used
}
