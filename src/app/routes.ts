import { Router } from 'express';

import userRoutes from './usuarios/routes';
import chatRoutes from './chat/routes';
import mailerRoutes from './mailer/routes';

import { authMiddleware } from './middlewares/auth';
const router = Router();

router.use('/users', userRoutes);
router.use('/chat', chatRoutes);
router.use('/email', mailerRoutes);
export default router;
