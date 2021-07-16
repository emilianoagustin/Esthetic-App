import { Router } from 'express';
import { CreateCalendar } from '../controllers/calendar';
import {
  addServiceToProvider,
  getProvidersByService,
} from '../controllers/servicesProviders';
import {
  getAllProviders,
  // getProviderByName,
  getProviderById,
  deleteProvider,
  updateProvider,
} from '../controllers/providers';
import {
  getAllAddresses,
  getOneAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from '../controllers/addresses';

import upload from '../libs/multer';
//import passport from 'passport';
//passport.authenticate('jwt');
const router = Router();

// <<PLAIN PROVIDERS ROUTES>>
router.get('/', getAllProviders);
// router.get("/?name", getProviderByName);
router.get('/:id', getProviderById);
router.delete('/:id', deleteProvider);
router.put('/:id', updateProvider);

//Calendar Routes, ADD service to provider Route
router.post('/calendar', CreateCalendar);
router.post('/services', addServiceToProvider);
router.get('/services/:serviceName', getProvidersByService);

// <<Routes to providers' addresses>>
router.get('/addresses', getAllAddresses);
router.get('/addresses/:id', getOneAddress);
router.post('/addresses', createAddress);
router.put('/addresses/:id', updateAddress);
router.delete('/addresses/:id', deleteAddress);

export default router;
