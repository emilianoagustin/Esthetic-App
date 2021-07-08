import { Router } from 'express';
import users from './users.routes';
import services from './services.routes';

const router = Router();

router.use('/users', users);
router.use('/services', services);

export default router;
