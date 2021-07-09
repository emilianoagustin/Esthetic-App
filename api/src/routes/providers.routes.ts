import { Router } from "express";
import { CreateCalendar } from "../controllers/calendar";
// import * as ctrlProv from "../controllers/providers";
import {
  getAllProviders,
  getProviderByName,
  getProviderById,
  createProvider,
  // deleteProvider,
  // updateProvider,
} from "../controllers/providers";
const router = Router();

router.get("/", getAllProviders);
router.get("/?name", getProviderByName);
router.get("/:id", getProviderById);
router.post("/", createProvider);
// router.delete("/:id", deleteProvider);
// router.put("/:id", updateProvider);


//Calendar Routes

router.post("/calendar", CreateCalendar);

export default router;
