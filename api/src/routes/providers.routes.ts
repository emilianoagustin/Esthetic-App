import { Router } from "express";
import { CreateCalendar } from "../controllers/calendar";
import {
  addServiceToProvider,
  getProvidersByService,
  addAllServicesToProvider,
  getServicesByProvider,
} from "../controllers/servicesProviders";
import {
  getAllProviders,
  // getProviderByName,
  getProviderById,
  deleteProvider,
  updateProvider,
} from "../controllers/providers";
import {
  getAllAddresses,
  getOneAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/addresses";

import upload from "../libs/multer";
//import passport from 'passport';
//passport.authenticate('jwt');
const router = Router();

// <<PLAIN PROVIDERS ROUTES>>
router.get("/", getAllProviders);
// router.get("/?name", getProviderByName);
router.get("/:id", getProviderById);
router.delete("/:id", deleteProvider);
router.put("/:id", updateProvider);

//Calendar Routes, ADD service to provider Route
router.get("/:id/services", getServicesByProvider);
router.post("/calendar", CreateCalendar);
router.post("/services", addServiceToProvider);
router.post("/allServices", addAllServicesToProvider);
router.get("/services/:serviceName", getProvidersByService);

// <<Routes to providers' addresses>>
router.get("/:id/addresses", getAllAddresses);
router.get("/:id/addresses/:idAd", getOneAddress);
router.post("/:id/addresses", createAddress);
router.put("/:id/addresses/:idAd", updateAddress);
router.delete("/:id/addresses/:idAd", deleteAddress);

export default router;
