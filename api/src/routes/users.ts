import { Router } from 'express';
import * as usersCtrl from '../controllers/getUsers';

const router = Router();

//obterner usuarios
router.get('/users', usersCtrl.getUsers);
router.get('/users/id', usersCtrl.getUser);
router.post('/users', usersCtrl.createUser);
router.delete('/users/:id', usersCtrl.deleteUser);
router.put('/users/:id', usersCtrl.updateUser);
export default router;
