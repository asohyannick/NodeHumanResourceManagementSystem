import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import createEmployeeLeave from '../../service/impl/leave/createEmployeeLeave/createLeave';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { EmployeeLeaveValidationSchema } from '../../utils/validators.impl';
const router = express.Router();
router.post('/create-employee-leave', authToken, globalValidator(EmployeeLeaveValidationSchema), createEmployeeLeave);
export default router;