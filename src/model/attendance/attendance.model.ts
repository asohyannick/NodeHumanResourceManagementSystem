import { Schema, model } from 'mongoose';
import { IAttendance } from '../../service/interfac/employeeAttendance/attendance.interfac';
const AttendanceSchema = new Schema<IAttendance>({
    employeeId: {
        type: Schema.ObjectId,
        ref: 'Employee',
    },
    totalPresent: {
        type: Number,
    },
    totalAbsent: {
        type: Number,
    },
    totalLeave: {
        type: Number,
    },
    totalHolidays: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    checkInTime: {
        type: Date,
        default: Date.now,
    },
    checkOutTime: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Leave', 'Holiday'],
    },
    reason: {
        type: String,
    },
}, {
    timestamps: true, 
});

const Attendance = model<IAttendance>('Attendance', AttendanceSchema);

export default Attendance;