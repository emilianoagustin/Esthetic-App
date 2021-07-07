import { RequestHandler } from 'express';
import Services from '../models/Services';

export const createService: RequestHandler = (req, res) => {
    const newService = new Services(req.body);
    newService.save()
        .then((result: any) => {
            return res.status(200).json(result);
        })
        .catch(() => {
            return res.status(301).json({ message: 'This service alredy exists' });
        })
};