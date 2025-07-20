import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { trainingValidationSchema, updateTrainingValidationSchema } from '../../utils/validators.impl';
import createTrainingSession from '../../service/impl/training/createTrainingSession/createTrainingSession';
import showTrainingSessions from '../../service/impl/training/showTrainingSessions/showTrainingSessions';
import showTrainingSession from '../../service/impl/training/showTrainingSession/showTrainingSession';
import updateTrainingSession from '../../service/impl/training/updateTrainingSession/updateTrainingSession';
const router = express.Router();
router.post('/create-training-session', authToken, globalValidator(trainingValidationSchema), createTrainingSession);
router.get('/show-training-session', authToken, showTrainingSessions);
router.get('/show-training-session/:id', authToken, showTrainingSession);
router.put('/update-training-session/:id', authToken, globalValidator(updateTrainingValidationSchema), updateTrainingSession);

export default router;