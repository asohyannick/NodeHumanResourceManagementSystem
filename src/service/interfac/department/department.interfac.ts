import { Document } from 'mongoose';
export enum DepartmentStatus {
    ACTIVE = 'Active',
    COMPLETED = 'Completed',
    HOLD_ON = 'Hold On',
}
export interface IDepartment extends Document {
    name: string; // Name of the department
    description?: string; // Optional description of the department
    location: string; // Physical location of the department
    headId?: string; // Reference to the Employee entity who is the head of the department
    employees: string[]; // Array of employee IDs in this department
    budget: number; // Annual budget allocated for the department
    isActive: boolean; // Indicates if the department is currently active
    projects?:[{
        name: string;
        description: string;
        startDate: Date;
        endDate: Date;
        status: DepartmentStatus
    }]; // Optional array of projects associated with the department
}