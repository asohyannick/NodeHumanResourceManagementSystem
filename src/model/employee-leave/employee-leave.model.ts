import { Schema, model  } from "mongoose";
import { IEmployeeLeave } from "../../service/interfac/leave/leave.interfac";
const EmployeeLeaveSchema = new Schema<IEmployeeLeave>({
    employeeId: {
        type: Schema.ObjectId,
        ref: 'Employee', 
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    maxDays: {
        type: Number,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    totalDays: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
    },
    reason: {
        type: String,
    },
    availableDays: {
        type: Number,
    },
    usedDays: {
        type: Number,
    },
}, {
    timestamps: true,
});

const EmployeeLeave = model<IEmployeeLeave>('EmployeeLeave', EmployeeLeaveSchema);

export default EmployeeLeave;