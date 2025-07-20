import { Document } from "mongoose";
export interface ITraining extends Document {
    title: string;
    description: string;
    session: string;
    name: string;
    email: string;
    phone: string;
    date: Date;
    duration: number;
    location: string;
    trainer: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
    participantId: string;
    registrationDate: Date;
}