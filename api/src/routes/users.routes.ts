import { Router } from 'express';
import * as usersCtrl from '../controllers/getUsers';

const router = Router();

//obterner usuarios
router.get('/', usersCtrl.getUsers);
router.get('/:id', usersCtrl.getUser);
router.post('/', usersCtrl.createUser);
router.delete('/:id', usersCtrl.deleteUser);
router.put('/:id', usersCtrl.updateUser);
//for assign service to user
// router.put('/assignService/:id', usersCtrl.assignService);
// router.put('/removeService/:id', usersCtrl.removeService);
export default router;
