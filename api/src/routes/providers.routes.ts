import { Router } from 'express';
import { CreateCalendar } from '../controllers/calendar';
import {
  getAllProviders,
  // getProviderByName,
  getProviderById,
  createProvider,
  deleteProvider,
  updateProvider,
} from '../controllers/providers';
import upload from '../libs/multer';

const router = Router();

router.get('/', getAllProviders);
// router.get("/?name", getProviderByName);
router.get('/:id', getProviderById);
router.post('/', upload.single('image'), createProvider);
router.delete('/:id', deleteProvider);
router.put('/:id', updateProvider);

//Calendar Routes

router.post('/calendar', CreateCalendar);

export default router;
