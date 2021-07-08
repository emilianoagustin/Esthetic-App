import { Router } from 'express';
import { createService, getServices, getServiceDetail } from '../controllers/getServices';

const router = Router();

router.post('/', createService);
router.get('/', getServices);
router.get('/:id', getServiceDetail);

export default router;