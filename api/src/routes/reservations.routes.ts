import { Router } from 'express';
import { addReservation, getUserReservations } from '../controllers/Bags';

const router = Router();

router.post('/', addReservation);
router.get('/:id', getUserReservations);

export default router;