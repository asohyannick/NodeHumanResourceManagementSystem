import { Document, Types } from "mongoose";
export interface IPerformance extends Document {
    employeeId: Types.ObjectId; // Reference to the Employee entity
    reviewerId: string; // Reference to the Reviewer (e.g., Manager)
    reviewPeriod: string; // Review period (e.g., "2023-Q1")
    reviewDate: Date; // Date of the review
    score: number; // Score given during the review (e.g., 1 to 5)
    feedback: string; // Detailed feedback from the reviewer
    title: string; // Title of the goal
    description: string; // Description of the goal
    targetDate: Date; // Target date for achieving the goal
    achieved: boolean; // Whether the goal was achieved
    overallScore: number; // Calculated overall performance score (e.g., average of scores)
    comments?: string; // Optional comments from the employee
}
