import { RequestHandler } from "express";
import Providers from "../models/Providers";
import Services from "../models/Services";

export const addServiceToProvider: RequestHandler = async (req, res) => {
    try {
        Services.findById(req.body.service)
            .then((service: any) => {
                Providers.findById(req.body.provider)
                    .then((provider: any) => {
                        provider.services.push(service);
                        provider.save();
                    });
            });
        Providers.findById(req.body.provider)
            .then((provider: any) => {
                Services.findById(req.body.service)
                    .then((service: any) => {
                        service.providers.push(provider);
                        service.save();
                    });
            });
        return res.status(200).send('Service added successfully');
    } catch (error) {
        res.status(400).send(error);
    }
};