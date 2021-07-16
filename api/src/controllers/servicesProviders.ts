import { RequestHandler } from 'express';
import Providers from '../models/Providers';
import Services from '../models/Services';

export const addServiceToProvider: RequestHandler = async (req, res) => {
  try {
    const service = await Services.findById(req.body.service);
    const provider = await Providers.findById(req.body.provider);

    let check = false;
    service.providers.forEach((provider: any) => {
      if (provider._id == req.body.provider) check = true;
    });
    if (check) {
      return res.status(301).send('The service has already been registered');
    } else {
      provider?.services.push(service);
      provider?.save();
      service.providers.push(provider);
      service.save();
      return res.status(200).send('Service added successfully');
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getProvidersByService: RequestHandler = async (req, res) => {
  try {
    const { serviceName } = req.params;
    const service = await Services.findOne({ name: serviceName });
    res.status(200).send(service.providers);
  } catch (error) {
    res.status(400).send(error);
  }
};
