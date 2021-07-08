import { RequestHandler } from 'express';
import Users from '../models/Users';

export const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = await Users.find(); // me devuelve un array con todos los usuarios que se encuentran en mi db
    return res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const getUser: RequestHandler = async (req, res) => {
  // para traer un solo usuario
  try {
    const userFound = await Users.findById(req.params.id);
    if (!userFound) return res.json(404).json({ message: 'not exist user' });
    return res.json(userFound);
  } catch (error) {
    res.json(error);
  }
};

export const createUser: RequestHandler = async (req, res) => {
  const userFound = await Users.findOne({ dni: req.body.dni }); // busco en la db
  if (userFound)
    return res.status(301).json({ message: 'The user alredy exists' });

  const newUser = new Users(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
};

export const updateUser: RequestHandler = async (req, res) => {
  const userUpdate = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); // 1params id para buscar, 2params los datos para actualizar, 3params pasarle new para poder retornar el usuario con los datos actualizados
  if (!userUpdate) return res.status(204).json();
  return res.json(userUpdate);
};

export const deleteUser: RequestHandler = async (req, res) => {
  const userDelete = await Users.findByIdAndDelete(req.params.id);
  if (!userDelete) return res.status(204).json();
  return res.json();
};
