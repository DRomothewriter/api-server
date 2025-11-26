import { Router } from 'express';
import { sendEmail } from './controller';
const router = Router();

router.get('/verification', sendEmail);

export default router;