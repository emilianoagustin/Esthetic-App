import { Router } from "express";
import { CreateCalendar } from "../controllers/calendar";
import { addServiceToProvider, getProvidersByService } from '../controllers/servicesProviders';
import {
  getAllProviders,
  // getProviderByName,
  getProviderById,
  createProvider,
  deleteProvider,
  updateProvider,
} from "../controllers/providers";
const router = Router();

//Calendar Routes, ADD service to provider Route

router.post("/calendar", CreateCalendar);
router.post('/services', addServiceToProvider)

router.get('/:serviceName', getProvidersByService)  // Get providers by service
router.get("/", getAllProviders);
// router.get("/?name", getProviderByName);
router.get("/:id", getProviderById);
router.post("/", createProvider);
router.delete("/:id", deleteProvider);
router.put("/:id", updateProvider);



export default router;
