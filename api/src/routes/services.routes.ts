import { Router } from 'express';
import {
  createService,
  getServices,
  getServiceDetail,
  deleteService,
} from '../controllers/getServices';
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

const router = Router();

router.post('/', upload.single('image'), createService);
router.get('/', getServices);
router.get('/:id', getServiceDetail);
router.delete('/:id', deleteService);

export default router;
