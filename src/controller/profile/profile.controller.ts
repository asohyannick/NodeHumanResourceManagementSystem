import express from 'express';
import authToken from '../../middleware/auth/auth.middle';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { profileSchema } from '../../utils/validators.impl';
import createProfile from '../../service/impl/profile/createProfile/createProfile.impl';
const router = express.Router();
router.post('/create-profile', authToken, globalValidator(profileSchema), createProfile);
export default router;