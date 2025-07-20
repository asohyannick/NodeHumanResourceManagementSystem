import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { FeedbackValidationSchema } from '../../utils/validators.impl';
import createFeedback from '../../service/impl/feedback/createFeedback/createFeedback';
import showFeedbacks from '../../service/impl/feedback/showFeedbacks/showFeedbacks';
const router = express.Router();
router.post('/submit-feedback', authToken, globalValidator(FeedbackValidationSchema), createFeedback);
router.get('/show-feedbacks', authToken, showFeedbacks)
export default router;