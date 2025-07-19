import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { JobValidationSchema } from '../../utils/validators.impl';
import createJob from '../../service/impl/job/createJob/createJob';
const router = express.Router();
router.post('/create-job', authToken, globalValidator(JobValidationSchema), createJob);
export default router;