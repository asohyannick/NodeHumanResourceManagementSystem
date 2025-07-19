import { Schema, model } from "mongoose";
import { IJob } from "../../service/interfac/job/job.interfac";

const QualificationSchema = new Schema({
    type: {
        type: String,
        enum: ['Education', 'Experience', 'Skill'],
    },
    description: {
        type: String,
    },
});

const SalaryRangeSchema = new Schema({
    min: {
        type: Number,
    },
    max: {
        type: Number,
    },
});

// Define the Job schema
const JobSchema = new Schema<IJob>({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    departmentId: {
        type: Schema.ObjectId,
        ref: 'Department', // Reference to the Department model
    },
    location: {
        type: String,
    },
    employmentType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract'],
    },
    requiredQualifications: [QualificationSchema], // Array of required qualifications
    preferredQualifications: [QualificationSchema], // Optional array of preferred qualifications
    salaryRange: SalaryRangeSchema, // Salary range for the position
    postingDate: {
        type: Date,
        default: Date.now,
    },
    closingDate: {
        type: Date,
        default: null, 
    },
    status: {
        type: String,
        enum: ['Open', 'Closed', 'On Hold'],
    },
    applicants: {
        type: [String], 
        default: [],
    },
}, {
    timestamps: true, 
});

const Job = model<IJob>('Job', JobSchema);

export default Job;