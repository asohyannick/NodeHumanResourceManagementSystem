import { Document, Types } from "mongoose";
interface Qualification {
    type: 'Education' | 'Experience' | 'Skill'; // Type of qualification
    description: string; // Description of the qualification
}

interface SalaryRange {
    min: number; // Minimum salary
    max: number; // Maximum salary
}
export interface IJob extends Document {
    title: string; // Software Engineer, Full Stack Web Developer
    description: string; // Detailed description of job responsibilities
    departmentId: Types.ObjectId; // Reference to the Department entity
    location: string; // Job location (e.g., remote, in-office)
    employmentType: 'Full-time' | 'Part-time' | 'Contract'; // Type of employment
    requiredQualifications: Qualification[]; // Array of required qualifications
    preferredQualifications?: Qualification[]; // Optional array of preferred qualifications
    salaryRange: SalaryRange; // Salary range for the position
    postingDate: Date; // Date when the job was posted
    closingDate?: Date; // Optional closing date for applications
    status: 'Open' | 'Closed' | 'On Hold'; // Current status of the job posting
    applicants: string[]; // Array of applicant IDs
}
