import { Document, Types } from 'mongoose';
export interface IAttendance extends Document  {
    employeeId: Types.ObjectId; // Reference to the Employee entity
    totalPresent: number; // Total number of days present
    totalAbsent: number; // Total number of days absent
    totalLeave: number; // Total number of leave days
    totalHolidays: number; // Total number of holidays
    date: Date; // Date of the attendance
    checkInTime: Date; // Check-in time for the employee
    checkOutTime: Date; // Check-out time for the employee
    status: 'Present' | 'Absent' | 'Leave' | 'Holiday'; // Status of attendance
    reason?: string; // Optional reason for absence or leave
}
