import { Schema, model } from "mongoose";
import { IDocumentManagement } from "../../service/interfac/document/document.interfac";
const DocumentManagementSchema = new Schema<IDocumentManagement>({
    title: {
        type: String,
    },
    folders: {
        type: [String], 
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    fileURL: {
        type: String,
    },
    uploadedBy: {
        type: String,
    },
    uploadDate: {
        type: Date,
        default: Date.now, 
    },
    documentType: {
        type: String,
        enum: ['Policy', 'Contract', 'Report', 'Form', 'Other'], 
    },
    status: {
        type: String,
        enum: ['Active', 'Archived', 'Deleted'], 
    },
    documents: {
        type: [String],
        default: [], 
    },
}, {
    timestamps: true,
});

const DocumentManagementModel = model<IDocumentManagement>('DocumentManagement', DocumentManagementSchema);

export default DocumentManagementModel;