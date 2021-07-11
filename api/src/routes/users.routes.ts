import { Router } from "express";
import * as usersCtrl from "../controllers/getUsers";
import {
  getAllAddresses,
  getOneAddress,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/addresses";
// var multer = require('multer')
// var upload = multer({ dest: 'uploads/' })

const router = Router();

//obterner usuarios

router.get("/", usersCtrl.getUsers);
router.get("/:id", usersCtrl.getUser);
// router.post("/", upload.single("image"), usersCtrl.createUser);
// router.post('/', usersCtrl.createUser);
router.delete("/:id", usersCtrl.deleteUser);
router.put("/:id", usersCtrl.updateUser);
// router.put('/assignService/:id', usersCtrl.assignService);
// router.put('/removeService/:id', usersCtrl.removeService);

// <<Routes to users' addresses>>
router.get("/addresses", getAllAddresses);
router.get("/addresses/:id", getOneAddress);
router.post("/addresses", createAddress);
router.put("/addresses/:id", updateAddress);
router.delete("/addresses/:id", deleteAddress);

export default router;
