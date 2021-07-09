import { RequestHandler } from 'express';
import Events from '../models/Events';
import Services from '../models/Services';
import Users from '../models/Users';
import Calendar from '../models/Calendar';

export const getCalendarEventsByDay: RequestHandler = (req, res) => {
    Calendar.findById(req.body.calendar)
        .then((result: any) => {
            const events = result.events.filter((event: any) => {
                if (event.date === req.body.date) return event
            });
            const hours = result.eventsHours;


            return res.status(200).json(events);
        })
        .catch(() => {
            return res.status(404).json({ message: 'No se encontraron Eventos' });
        })
};

export const createEvent: RequestHandler = (req, res) => {
    const event = new Events(req.body);
    event.save()
        .then((result: any) => {
            Services.findById(req.body.service)
                .then((service: any) => {
                    service.events.push(event);
                    service.save();
                })
            Users.findById(req.body.user)
                .then((user: any) => {
                    user.events.push(event);
                    user.save();
                })
            Calendar.findById(req.body.calendar)
                .then((calendar: any) => {
                    calendar.events.push(event);
                    calendar.save();
                })
            return res.status(200).json(result);
        })
        .catch((err: Error) => {
            return res.status(400).send(err);
        })
};