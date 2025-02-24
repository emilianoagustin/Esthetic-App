import { Router } from 'express';
import users from './users.routes';
import providers from './providers.routes';
import services from './services.routes';
import events from './events.routes';
import reservations from './reservations.routes';
import auth from './auth.routes';
import checkout from './checkout.routes';
// import checkout_MP from "./checkout_MP.routes";

const router = Router();

router.use('/users', users);
router.use('/services', services);
router.use('/providers', providers);
router.use('/events', events);
router.use('/auth', auth);
router.use('/reservations', reservations);
router.use('/checkout', checkout);
// router.use("/checkout_MP", checkout_MP);

export default router;
