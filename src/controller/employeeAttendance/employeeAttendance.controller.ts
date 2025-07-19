import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { AttendanceValidationSchema } from '../../utils/validators.impl';
import createEmployeeAttendance from '../../service/impl/attendance/createEmployeeAttendance/createEmployeeAttendance';
const router = express.Router();
router.post('/create-attendance', authToken, globalValidator(AttendanceValidationSchema), createEmployeeAttendance);
export default router;