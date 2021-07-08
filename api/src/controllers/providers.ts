import { RequestHandler } from "express";
import Providers from "../models/Providers";

export const getAllProviders: RequestHandler = async (req, res) => {
  try {
    const prov = await Providers.find();
    return res.send(prov);
  } catch (error) {
    res.send(error);
  }
};
export const getProviderByName: RequestHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const foundProv = await Providers.findOne({ name: name });
    if (foundProv) return res.send(foundProv);
    return res.send(404).send({
      message: `No encontramos ningún proveedor con el nombre ${name}. Lamentamos los inconvenientes`,
    });
  } catch (error) {
    res.send(error);
  }
};
export const getProviderById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const foundProv = await Providers.findById(id);
    if (foundProv) return res.send(foundProv);
    return res.send(404).send({
      message: `Proveedor con id ${id} no encontrado. Lamentamos los inconvenientes`,
    });
  } catch (error) {
    res.send(error);
  }
};
export const createProvider: RequestHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const validateEmail = await Providers.findOne({ email: email });
    if (validateEmail) {
      return res
        .status(300)
        .send({ message: "Lo sentimos. Ese email ya ha sido registrado" });
      res.redirect("/login");
    } else {
      // validator: function (v: string) {
      //   return /\S@\S.\mail.\S/.test(v);
      // },
      // message: "Por favor ingresar un email válido",
      const provToCreate = new Providers(req.body);
      const newProv = await provToCreate.save();
      return res.status(301).send(newProv);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};
// export const updateProvider: RequestHandler = async (req, res) => {};
// export const deleteProvider: RequestHandler = async (req, res) => {};

// export const updateUser: RequestHandler = async (req, res) => {
//   const userUpdate = await Users.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   }); // 1params id para buscar, 2params los datos para actualizar, 3params pasarle new para poder retornar el usuario con los datos actualizados
//   if (!userUpdate) return res.status(204).json();
//   return res.json(userUpdate);
// };

// export const deleteUser: RequestHandler = async (req, res) => {
//   const userDelete = await Users.findByIdAndDelete(req.params.id);
//   if (!userDelete) return res.status(204).json();
//   return res.json();
// };
