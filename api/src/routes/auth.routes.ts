import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller';
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

const router = Router();

router.post('/signup', upload.single('image'), authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router;
