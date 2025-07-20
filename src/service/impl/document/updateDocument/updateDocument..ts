import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DocumentManagementModel from "../../../../model/document/document.model";
const updateUploadedDocument = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            title,
            folders,
            name,
            description,
            fileURL,
            uploadedBy,
            documents,
        } = req.body;
        const { id } = req.params;
        const document = await DocumentManagementModel.findByIdAndUpdate(id, {
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
        }, { new: true, runValidators: true });
        if (!document) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee document doesn't exist!"
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee uploaded document has been edited and updated successfully from the backend!",
            document,
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

export default updateUploadedDocument;