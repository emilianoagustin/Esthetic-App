import { Router } from 'express';
import {
    getEventsByRole,
    getCalendarEventsByDay,
    cancelEvent,
    removeAlert,
    giveReview,
} from '../controllers/getEvents';

const router = Router();

router.post('/calendar', getCalendarEventsByDay);
router.post('/review', giveReview);
router.post('/alert', removeAlert);
router.get('/:role/:id', getEventsByRole);
router.post('/cancel/:role', cancelEvent);

export default router;