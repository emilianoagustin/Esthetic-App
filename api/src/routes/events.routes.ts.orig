import { Router } from 'express';
import { createEvent, getCalendarEventsByDay } from '../controllers/getEvents';

const router = Router();

router.post('/', createEvent);
router.post('/calendar', getCalendarEventsByDay);

export default router;