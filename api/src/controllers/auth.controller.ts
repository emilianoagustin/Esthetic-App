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
    file,
  } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Please, send your email and password' });

  const userFound = await Users.findOne({ email: email }); // busco en la db
  if (userFound)
    return res.status(301).json({ message: 'The user alredy exists' });

  const dataUser = {
    image: `uploads\\${file}`,
    firstName,
    lastName,
    username,
    gender,
    email,
    phone,
    password,
  };
  const newUser = new Users(dataUser);
  const savedUser = await newUser.save();
  res.json(savedUser);
};

export const signIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Please, send your email and password' });

  const userFound = await Users.findOne({ email: email });
  if (!userFound)
    return res.status(400).json({ message: 'The user does not exist' });

  const isMatch = await userFound.comparePassword(password);
  if (isMatch) return res.json({ token: createToken(userFound) });
  return res
    .status(400)
    .json({ message: 'The email or password are incorrect' });
};
