import { model, Schema } from "mongoose";
import { IDepartment, DepartmentStatus } from '../../service/interfac/department/department.interfac';

const projectSchema = new Schema({
    name: { type: String },
    description: { type: String},
    startDate: { type: Date, default: Date.now }, // Ensure startDate is not in the future
    endDate: { type: Date, default: Date.now },
    status: { 
        type: String, 
        enum: Object.values(DepartmentStatus), 
        default: DepartmentStatus.ACTIVE,
    },
});

const departmentSchema: Schema<IDepartment> = new Schema(
    {
        name: { type: String },
        description: { type: String, }, // Optional
        location: { type: String },
        headId: { 
            type: String, 
            default: null, 
            match: /^[a-fA-F0-9]{24}$/, // Validate MongoDB ObjectId format
        },
        employees: { 
            type: [String], 
        },
        budget: { type: Number }, // Non-negative budget
        isActive: { type: Boolean, default: false, },
        projects: { 
            type: [projectSchema], 
            default: [] // Optional array of projects
        },
    },
    { timestamps: true }
);

const Department = model<IDepartment>('Department', departmentSchema);
export default Department;