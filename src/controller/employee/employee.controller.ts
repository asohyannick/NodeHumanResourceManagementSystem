import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { employeeSchema } from '../../utils/validators.impl';
import createEmployee from '../../service/impl/employee/createEmployee/createEmployee.impl';
const router = express.Router();
router.post('/create-employee', authToken, globalValidator(employeeSchema), createEmployee);
export default router;