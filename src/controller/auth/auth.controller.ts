import express from 'express';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { registerAccountSchema } from '../../utils/validators.impl';
import createAccount from '../../service/impl/register/register.impl';
const router = express.Router();
router.post('/create-account', globalValidator(registerAccountSchema), createAccount);
export default router;