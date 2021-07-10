import { Router } from "express";
import { CreateCalendar } from "../controllers/calendar";
<<<<<<< HEAD
import { addServiceToProvider } from "../controllers/servicesProviders";
=======
import { addServiceToProvider, getProvidersByService } from '../controllers/servicesProviders';
>>>>>>> 9dcc6b87573b551002fe6dcf1caba5549369d1ae
import {
  getAllProviders,
  // getProviderByName,
  getProviderById,
  createProvider,
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
const router = Router();

<<<<<<< HEAD
// <<PLAIN PROVIDERS' ROUTES>>
=======
//Calendar Routes, ADD service to provider Route

router.post("/calendar", CreateCalendar);
router.post('/services', addServiceToProvider)

router.get('/:serviceName', getProvidersByService)  // Get providers by service
>>>>>>> 9dcc6b87573b551002fe6dcf1caba5549369d1ae
router.get("/", getAllProviders);
// router.get("/?name", getProviderByName);
router.get("/:id", getProviderById);
router.post("/", createProvider);
router.delete("/:id", deleteProvider);
router.put("/:id", updateProvider);

//Calendar Routes, ADD service to provider Route
router.post("/calendar", CreateCalendar);
router.post("/services", addServiceToProvider);

// <<Routes to users' addresses>>
router.get("/addresses", getAllAddresses);
router.get("/addresses/:id", getOneAddress);
router.post("/addresses", createAddress);
router.put("/addresses/:id", updateAddress);
router.delete("/addresses/:id", deleteAddress);

export default router;
