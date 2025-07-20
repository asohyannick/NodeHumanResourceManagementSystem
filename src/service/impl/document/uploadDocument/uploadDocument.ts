import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DocumentManagementModel from "../../../../model/document/document.model";
const createAndUploadDocument = async (req: Request, res: Response): Promise<Response> => {
    const {
        title,
        folders,
        name,
        description,
        fileURL,
        uploadedBy,
        documents,
    } = req.body;
    try {
        const uploadDocument = new DocumentManagementModel({
            title,
            folders,
            name,
            description,
            fileURL,
            uploadedBy,
            uploadDate: Date.now(),
            documentType: 'Policy',
            status: 'Active',
            documents,
        });
        await uploadDocument.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new employee document has been uploaded successfully!",
            uploadDocument,
        });
    } catch (error) {
        console.error("Error occured!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error Message",
        });
    }
}

export default createAndUploadDocument;