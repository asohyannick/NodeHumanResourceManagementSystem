import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { PayrollValidationSchema } from '../../utils/validators.impl';
import createEmployeePayRoll from '../../service/impl/payRoll/creeateEmployeePayRoll/createEmployeePayRoll';
const router = express.Router();
router.post('/create-employee-pay-roll', authToken, globalValidator(PayrollValidationSchema), createEmployeePayRoll);
export default router;