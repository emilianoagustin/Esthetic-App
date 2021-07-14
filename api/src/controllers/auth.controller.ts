
import { RequestHandler } from 'express';
import Users from '../models/Users';
import createToken from '../utils/functionToken';


export const signUp: RequestHandler = async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    gender,
    email,
    phone,
    password,
    // file,
  } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Please, send your email and password" });

  const userFound = await Users.findOne({ email: email }); // busco en la db
  if (userFound)

    return res.status(301).json({ message: 'The user alredy exists' });
  // console.log(req);
  // image: `uploads\\${file}`,

  const dataUser = {
    // image: `http://localhost:3002/uploads/${req.file?.filename}`,
    image: req.file?.path,
    // image: req.file?.buffer,
    firstName,
    lastName,
    username,
    gender,
    email,
    phone,
    password,
  };

  // if (req.file) {
  //   const { filename } = req.file;
  //   dataUser.setImage(filename);
  // }
  const newUser = new Users(dataUser);
  const savedUser = await newUser.save();
  res.json(savedUser);
};

export const signIn: RequestHandler = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Please, send your email and password" });

  const userFound = await Users.findOne({ email: email });
  if (!userFound)
    return res.status(400).json({ message: "The user does not exist" });

  const isMatch = await userFound.comparePassword(password);

  if (isMatch) return res.json({userFound, token: createToken(userFound) });

  return res
    .status(400)
    .json({ message: "The email or password are incorrect" });
};
