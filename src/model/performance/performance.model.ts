import { Schema, model } from "mongoose";
import { IPerformance } from "../../service/interfac/performance/performance.interfac";
const PerformanceSchema = new Schema<IPerformance>({
    employeeId: {
        type: Schema.ObjectId,
        ref: 'Employee', // Reference to the Employee model
    },
    reviewerId: {
        type: String,
    },
    reviewPeriod: {
        type: String,
    },
    reviewDate: {
        type: Date,
        default: Date.now,
    },
    score: {
        type: Number,
    },
    feedback: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    targetDate: {
        type: Date,
        default: Date.now,
    },
    achieved: {
        type: Boolean,
        default: false,
    },
    overallScore: {
        type: Number,
    },
    comments: {
        type: String,
    },
}, {
    timestamps: true, 
});

const Performance = model<IPerformance>('Performance', PerformanceSchema);

export default Performance;