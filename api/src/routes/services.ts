import { Router } from 'express';
import { createService } from '../controllers/getServices';

const router = Router();

router.post('/', createService);

router.get('/',);

export default router;