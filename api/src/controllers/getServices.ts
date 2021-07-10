import { RequestHandler } from 'express';
import Services from '../models/Services';

export const createService: RequestHandler = (req, res) => {
    var newService = new Services(req.body)
    newService.save()
        .then((result: any) => {
            return res.status(200).json(result);
        })
        .catch((err: Error) => {
            return res.status(301).json(err);
        })
};

export const getServices: RequestHandler = (req, res) => {
    Services.find()
        .then((result: any) => {
            return res.status(200).json(result);
        })
        .catch(() => {
            return res.status(404).json({ message: 'No se encontraron servicios' });
        })
};

export const getServiceDetail: RequestHandler = (req, res) => {
    const {id} = req.params 
    console.log(id)
    Services.findById(req.params.id)
        .then((result: any) => {
            return res.status(200).json(result);
        })
        .catch(() => {
            return res.status(404).json({ message: 'Este servicio no existe' });
        })
};