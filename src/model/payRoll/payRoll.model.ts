import { Schema, model} from "mongoose";
import { IPayroll } from '../../service/interfac/payRoll/payRoll.interfac';
const PayrollSchema = new Schema<IPayroll>({
    employeeId: {
        type: Schema.ObjectId,
        ref: 'Employee', 
    },
    month: {
        type: String,
    },
    year: {
        type: Number,
    },
    basicSalary: {
        type: Number,
    },
    allowances: {
        type: Number,
    },
    deductions: {
        type: Number,
    },
    netSalary: {
        type: Number,
    },
    paymentDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['Paid', 'Pending', 'Failed'], 
    },
}, {
    timestamps: true,
});

const EmployeePayRoll = model<IPayroll>('EmployeePayRoll', PayrollSchema);

export default EmployeePayRoll;