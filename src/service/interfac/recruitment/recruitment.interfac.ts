import { Document } from "mongoose";
export interface IRecruitment extends Document {
    jobId: string;
    title: string;
    description: string;
    requirements: string[];
    location: string;
    openingDate: Date;
    closingDate: Date;
    name: string;
    email: string;
    phone: string;
    resumeUrl: string;
    appliedPosition: string;
    applicationDate: Date;
    status: 'Applied' | 'Interviewed' | 'Hired' | 'Rejected';
    interviewId: string;
    candidateId: string;
    interviewDate: Date;
    interviewers: string[];
    feedback: string;
    score: number;
}