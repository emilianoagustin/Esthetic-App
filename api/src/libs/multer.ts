import multer from 'multer';
import { v4 as uuid } from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
  //estination: 'uploads', // donde guarda
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    let filename = uuid() + path.extname(file.originalname);
    req.body.file = filename;
    cb(null, filename);
    // cb(null, uuid() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
export default upload;
