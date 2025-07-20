import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { FeedbackValidationSchema, updateFeedbackValidationSchema } from '../../utils/validators.impl';
import createFeedback from '../../service/impl/feedback/createFeedback/createFeedback';
import showFeedbacks from '../../service/impl/feedback/showFeedbacks/showFeedbacks';
import showFeedback from '../../service/impl/feedback/showFeedback/showFeedback';
import updateFeedback from '../../service/impl/feedback/updateFeedback/updateFeedback';
const router = express.Router();
router.post('/submit-feedback', authToken, globalValidator(FeedbackValidationSchema), createFeedback);
router.get('/show-feedbacks', authToken, showFeedbacks);
router.get('/show-feedback/:id', authToken, showFeedback);
router.put('/update-feedback/:id', authToken, globalValidator(updateFeedbackValidationSchema), updateFeedback);

export default router;