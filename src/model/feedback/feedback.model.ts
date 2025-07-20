import { Schema, model } from "mongoose";
import { IFeedback } from "../../service/interfac/feedback/feedback.interfac";
const FeedbackSchema = new Schema<IFeedback>({
    employeeId: {
        type: String,
    },
    trainingSessionId: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now, 
    },
    score: {
        type: Number,
    },
    comments: {
        type: String,
    },
    areasOfImprovement: {
        type: [String], 
    },
    overallSatisfaction: {
        type: String,
        enum: ['Very Unsatisfied', 'Unsatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'],
    },
    followUpActions: {
        type: String,
    },
}, {
    timestamps: true, 
});

const FeedbackModel = model<IFeedback>('Feedback', FeedbackSchema);

export default FeedbackModel;