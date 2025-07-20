import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { PerformanceValidationSchema } from '../../utils/validators.impl';
import createEmployeePerformaceReview from '../../service/impl/performanceReview/createPerformanceReview/createPerformanceReview';
const router = express.Router();
router.post("/create-employee-performance", authToken, globalValidator(PerformanceValidationSchema), createEmployeePerformaceReview);
export default router;