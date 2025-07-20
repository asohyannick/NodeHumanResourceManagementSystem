import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { recruitmentValidationSchema } from '../../utils/validators.impl';
import createJobPosting from '../../service/impl/recruitment/createJobPosting/createJobPosting';
const router = express.Router();
router.post('/create-job-posting', authToken, globalValidator(recruitmentValidationSchema), createJobPosting);
export default router;