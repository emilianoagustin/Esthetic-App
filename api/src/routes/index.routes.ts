import { Router } from 'express';
import users from './users.routes';
import providers from './providers.routes';
import services from './services.routes';
import events from './events.routes';
//
import auth from './auth.routes';

const router = Router();

router.use('/users', users);
router.use('/services', services);
router.use('/providers', providers);
router.use('/events', events);
router.use('/auth', auth);

export default router;
