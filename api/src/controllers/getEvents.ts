import { RequestHandler } from 'express';
import Events from '../models/Events';
import Services from '../models/Services';
import Users from '../models/Users';
import Calendar from '../models/Calendar';
import { isValidDate } from '../utils/functions';
import Providers from '../models/Providers';
import Bags from '../models/Bags';

export const getCalendarEventsByDay: RequestHandler = async (req, res) => {

    let reservations: any = []

    if (req.body.user !== '') {
        const user: any = await Users.findById(req.body.user);
        const bag: any = await Bags.findOne({ user: user });
        reservations = bag.reservations;
    }

    Providers.findById(req.body.provider)
        .then((prov: any) => {
            Calendar.findOne({ provider: prov })
                .then((result: any) => {
                    const events: Array<any> = [];

                    result.eventsHours.forEach((hour: Number, index: any) => {
                        let validate = isValidDate(req.body.date, hour);

                        let cartItem = false;

                        reservations.forEach((reservation: any) => {
                            if (reservation.providerID === req.body.provider &&
                                reservation.date === req.body.date &&
                                reservation.hour === hour) {
                                cartItem = true;
                            }
                        })

                        events[index] = {
                            isActive: validate,
                            isAvailable: true,
                            date: req.body.date,
                            hour: hour,
                            isCartItem: cartItem
                        }
                    })

                    result.events.map((event: any) => {
                        if (event.date === req.body.date) {
                            result.eventsHours.forEach((hour: Number, index: any) => {
                                if (event.hour === hour) {
                                    events[index] = event;

                                }
                            })
                        }
                    });

                    return res.status(200).json(events);
                })

        })

        .catch(() => {
            return res.status(404).json({ message: 'No se encontraron Eventos' });
        })
};

export const createEvent: RequestHandler = (req, res) => {
    const event = new Events(req.body);
    event.save()
        .then((result: any) => {
            result.isAvailable = false;
            result.save();
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