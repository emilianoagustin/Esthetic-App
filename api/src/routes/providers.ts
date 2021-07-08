import { Router } from "express";
import * as ctrlProv from "../controllers/Providers";

const router = Router();

router.get("/providers", ctrlProv.getAllProviders);
router.get("/providers/?name", ctrlProv.getProviderByName);
router.get("/providers/:id", ctrlProv.getProviderById);
router.post("/providers", ctrlProv.createProvider);
// router.delete("/providers/:id", ctrlProv.deleteProvider);
// router.put("/providers/:id", ctrlProv.updateProvider);
export default router;
