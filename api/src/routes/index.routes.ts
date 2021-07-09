import { Router } from "express";
import users from "./users.routes";
import providers from "./providers.routes";
import services from "./services.routes";

const router = Router();

router.use("/users", users);
router.use("/services", services);
router.use("/providers", providers);

export default router;
