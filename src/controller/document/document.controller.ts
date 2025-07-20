import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { documentManagementValidationSchema } from '../../utils/validators.impl';
import createAndUploadDocument from '../../service/impl/document/uploadDocument/uploadDocument';
const router = express.Router();
router.post('/', authToken, globalValidator(documentManagementValidationSchema), createAndUploadDocument);
export default router;