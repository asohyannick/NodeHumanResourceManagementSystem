import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { departmentSchema } from '../../utils/validators.impl';
import createDepartment from '../../service/impl/department/createDepartment/createDepartment';
const router = express.Router();
router.post('/create-department', authToken, globalValidator(departmentSchema), createDepartment);
export default router;