import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { trainingValidationSchema } from '../../utils/validators.impl';
import createTrainingSession from '../../service/impl/training/createTrainingSession/createTrainingSession';
const router = express.Router();
router.post('/', authToken, globalValidator(trainingValidationSchema), createTrainingSession);
export default router;