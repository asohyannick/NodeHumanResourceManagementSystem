import { Document } from "mongoose";
export interface IDocumentManagement extends Document {
    title: string;
    folders: string[];
    name: string;
    description: string;
    fileURL: string;
    uploadedBy: string;
    uploadDate: Date;
    documentType: 'Policy' | 'Contract' | 'Report' | 'Form' | 'Other';
    status: 'Active' | 'Archived' | 'Deleted';
    documents: string[];
}
