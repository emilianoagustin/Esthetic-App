import { Router } from 'express';
import { addReservation } from '../controllers/Bags';

const router = Router();

router.post('/', addReservation);

export default router;