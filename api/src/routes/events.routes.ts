import { Router } from 'express';
import { getEventsByRole, getCalendarEventsByDay } from '../controllers/getEvents';

const router = Router();

router.get('/:role/:id', getEventsByRole);
router.post('/calendar', getCalendarEventsByDay);

export default router;