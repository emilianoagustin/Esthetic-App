import { RequestHandler } from "express";
import Addresses from "../models/Addresses";

export const getAllAddresses: RequestHandler = async (req, res) => {
  try {
    const addresses = await Addresses.find();
    return res.send(addresses);
  } catch (error) {
    res.send(error);
  }
};

export const getOneAddress: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const foundAddress = await Addresses.findById(id);
    if (foundAddress) return res.send(foundAddress);
  } catch (error) {
    res.send(error);
  }
};

export const createAddress: RequestHandler = async (req, res) => {
  try {
    const foundAddress = await Addresses.findOne({ name: req.body.name });
    if (foundAddress)
      return res.status(301).send({
        message: `Ya tienes una domicilio llamado ${req.body.name}. Quieres agregar tu nuevo domicilio con otro nombre o registrar uno nuevo?`,
      });
    const newAddress = new Addresses(req.body);
    newAddress.save();
    return res.status(202).send({
      data: newAddress,
      message: `Nuevo domicilio ${newAddress.name} guardado con éxito.`,
    });
  } catch (error: any) {
    res.status(501).send({
      message: "Algo salió mal. Por favor vuelve a intentarlo.",
    });
  }
};

export const updateAddress: RequestHandler = async (req, res) => {
  const updateAddress = await Addresses.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!updateAddress) return res.status(202).send();
  return res.send(updateAddress);
};

export const deleteAddress: RequestHandler = async (req, res) => {
  const deleteAddress = await Addresses.findByIdAndDelete(req.params.id);
  if (!deleteAddress) return res.status(202).send();
  return res.send();
};
