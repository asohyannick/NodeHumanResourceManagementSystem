import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { FeedbackValidationSchema } from '../../utils/validators.impl';
import createFeedback from '../../service/impl/feedback/createFeedback/createFeedback';
const router = express.Router();
router.post('/submit-feedback', authToken, globalValidator(FeedbackValidationSchema), createFeedback);
export default router;