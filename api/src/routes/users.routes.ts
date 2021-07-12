import { Router } from 'express';
import * as usersCtrl from '../controllers/getUsers';
import {
  getAllAddresses,
  getOneAddress,
  createAddress,
  updateAddress,
  deleteAddress,
<<<<<<< HEAD
} from "../controllers/addresses";
import {
  getAllCreditCards,
  getOneCreditCard,
  createCreditCard,
  updateCreditCard,
  deleteCreditCard,
} from "../controllers/creditCards";
=======
} from '../controllers/addresses';
>>>>>>> f8dd1650200ccd6989f7c122ca9f6eac19b12109

var multer = require("multer");
var upload = multer({ dest: "uploads/" });

const router = Router();

<<<<<<< HEAD
// <<PLAIN USERS ROUTES>>
router.get("/", usersCtrl.getUsers);
router.get("/:id", usersCtrl.getUser);
router.post("/", upload.single("image"), usersCtrl.createUser);
// router.post('/', usersCtrl.createUser);
router.delete("/:id", usersCtrl.deleteUser);
router.put("/:id", usersCtrl.updateUser);

=======
router.get('/', usersCtrl.getUsers);
router.get('/:id', usersCtrl.getUser);
router.delete('/:id', usersCtrl.deleteUser);
router.put('/:id', usersCtrl.updateUser);
>>>>>>> f8dd1650200ccd6989f7c122ca9f6eac19b12109
// router.put('/assignService/:id', usersCtrl.assignService);
// router.put('/removeService/:id', usersCtrl.removeService);

// <<Routes to users' addresses>>
router.get('/addresses', getAllAddresses);
router.get('/addresses/:id', getOneAddress);
router.post('/addresses', createAddress);
router.put('/addresses/:id', updateAddress);
router.delete('/addresses/:id', deleteAddress);

// <<Routes to creditCards>>
router.get("/creditCards", getAllCreditCards);
router.get("/creditCard/:id", getOneCreditCard);
router.post("/creditCard", createCreditCard);
router.put("/creditCard/:id", updateCreditCard);
router.delete("/creditCard/:id", deleteCreditCard);

export default router;
