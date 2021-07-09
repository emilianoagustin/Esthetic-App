import { RequestHandler } from 'express';
import Calendar from '../models/Calendar';
import Providers from '../models/Providers';


export const CreateCalendar: RequestHandler = (req, res) => {
    Providers.findById(req.body.provider)
        .then((provider: any) => {
            if (!provider.hasCalendar) {
                provider.hasCalendar = true;
                provider.save();
                const newCalendar = new Calendar(req.body);
                newCalendar.save()
                    .then((calendar: any) => {
                        res.status(200).send(calendar)
                    })
            } else {
                return res.status(301).json({ message: 'Ya existe un calendario para ese proveedor' });
            }
        })
        .catch((err: any) => {
            res.status(400).send(err)
        })
};