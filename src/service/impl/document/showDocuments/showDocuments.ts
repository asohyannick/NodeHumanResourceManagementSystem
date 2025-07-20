import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DocumentManagementModel from "../../../../model/document/document.model";
const showUploadedDocuments = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const documents = await DocumentManagementModel.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All available employee uploaded documents have been fetched successfully from the backend!",
            documents,
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

export default showUploadedDocuments;