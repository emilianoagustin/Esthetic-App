import { Router } from "express";
import users from "./users.routes";
import providers from "./providers.routes";

const router = Router();

router.use("/users", users);
router.use("/providers", providers);

export default router;
