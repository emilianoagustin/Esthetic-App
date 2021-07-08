import { RequestHandler } from 'express';
import Calendar from '../models/Calendar';

export const CreateCalendar: RequestHandler = (req, res) => {
    const newCalendar = new Calendar(req.body)
};