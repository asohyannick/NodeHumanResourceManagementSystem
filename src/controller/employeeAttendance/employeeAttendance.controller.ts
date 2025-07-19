import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { AttendanceValidationSchema, updateAttendanceValidationSchema } from '../../utils/validators.impl';
import createEmployeeAttendance from '../../service/impl/attendance/createEmployeeAttendance/createEmployeeAttendance';
import showEmployeeAttendances from '../../service/impl/attendance/showEmployeeAttendances/showEmployeeAttendances';
import showEmployeeAttendance from '../../service/impl/attendance/showEmployeeAttendance/showEmployeeAttendance';
import updateEmployeeAttendance from '../../service/impl/attendance/updateEmployeeAttendance/updateEmployeeAttendance';
const router = express.Router();
router.post('/create-attendance', authToken, globalValidator(AttendanceValidationSchema), createEmployeeAttendance);
router.get('/show-employee-attendances', authToken, showEmployeeAttendances);
router.get('/show-employee-attendance/:id', authToken, showEmployeeAttendance);
router.put('/update-employee-attendance/:id', authToken, globalValidator(updateAttendanceValidationSchema), updateEmployeeAttendance);

export default router;