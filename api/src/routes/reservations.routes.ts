import { Router } from 'express';
import { addReservation, getUserReservations, getReservationsAvailability, payReservations } from '../controllers/Bags';

const router = Router();

router.post('/', addReservation);
router.get('/:id', getUserReservations);
router.get('/events/:id', getReservationsAvailability);
router.get('/events/pay/:id', payReservations);

export default router;