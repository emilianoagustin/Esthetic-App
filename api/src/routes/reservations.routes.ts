import { Router } from 'express';
import { addReservation, getUserReservations, getReservationsAvailability } from '../controllers/Bags';

const router = Router();

router.post('/', addReservation);
router.get('/:id', getUserReservations);
router.get('/events/:id', getReservationsAvailability);

export default router;