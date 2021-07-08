import { RequestHandler } from 'express';
import Services from '../models/Services';

export const getServices: RequestHandler = (req, res) => {
    Services.find()
        .then((result: any) => {
            return res.status(200).json(result);
        })
        .catch(() => {
            return res.status(404).json({ message: 'No se encontraron servicios' });
        })
};