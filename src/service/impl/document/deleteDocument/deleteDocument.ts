import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import DocumentManagementModel from "../../../../model/document/document.model";
const deleteUploadedDocument = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const document = await DocumentManagementModel.findByIdAndDelete(id);
        if(!document) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Employee document doesn't exist!"
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A single available employee uploaded document has been deleted successfully from the backend!",
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

export default deleteUploadedDocument;