import { RequestHandler } from 'express';
import Services from '../models/Services';

export const createService: RequestHandler = async (req, res) => {
    const service = await Services.findById(req.body.id)
    if (service) {
        return res.status(301).json({ nessage: 'This service alredy exists' });
    }

    const newService = new Services(req.body);
    const savedService = await newService.save();
    res.json(savedService);
};