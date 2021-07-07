import { Router } from 'express';
import users from './users';
import services from './services';

const router = Router();

router.use('/users', users);
router.use('/services', services);

export default router;

