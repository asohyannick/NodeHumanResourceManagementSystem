import { Document } from "mongoose";
export interface IFeedback extends Document {
    employeeId: string; 
    trainingSessionId: string; 
    date: Date; 
    score: number; 
    comments: string; 
    areasOfImprovement: string[]; 
    overallSatisfaction: 'Very Unsatisfied' | 'Unsatisfied' | 'Neutral' | 'Satisfied' | 'Very Satisfied'; 
    followUpActions?: string; 
}