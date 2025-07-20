import { Schema, model } from "mongoose";
import { ITraining } from "../../service/interfac/training/training.interfac";
const TrainingSchema = new Schema<ITraining>({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    session: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        match: /.+\@.+\..+/, // Simple email validation regex
    },
    phone: {
        type: String,
    },
    date: {
        type: Date,
    },
    duration: {
        type: Number,
    },
    location: {
        type: String,
    },
    trainer: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'], // Valid status values
    },
    participantId: {
        type: String,
    },
    registrationDate: {
        type: Date,
        default: Date.now, 
    },
}, {
    timestamps: true, 
});

const TrainingModel = model<ITraining>('Training', TrainingSchema);

export default TrainingModel;