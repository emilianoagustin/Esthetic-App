import { RequestHandler } from 'express';
import Role from '../models/Roles';
import Users from '../models/Users';
import Providers from '../models/Providers';
import createToken from '../utils/functionToken';
import Bags from '../models/Bags';

//SIGNUP USERS: user / provider

export const signUp: RequestHandler = async (req, res) => {
  const {
    image,
    firstName,
    lastName,
    gender,
    email,
    phone,
    password,
    roles,

    // file,
  } = req.body;

  console.log('---x---', req.body.roles);

  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Please, send your email and password' });

  if (roles === 'user') {
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

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role: any) => role._id);
    }
    // else {
    //   const role = await Role.find({ name: 'user' });
    //   newUser.roles = [role._id];
    // }

    const userBag = new Bags({ user: newUser });
    await userBag.save()

    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  }

  if (roles === 'provider') {
    try {
      const foundProv = await Providers.findOne({ email: req.body.email });
      if (foundProv)
        return res.status(301).send({
          message:
            "Lo sentimos. Ese email ya ha sido registrado. Puedes intentar dirigirte a la sección de 'Login' e ingresar con tu contraseña o crear un nuevo usuario con un email distinto",
        });

      const {
        image,
        firstName,
        lastName,
        gender,
        email,
        phone,
        password,
        roles,
        hasCalendar,
        addresses,
        services,
      } = req.body;

      if (!email || !password)
        return res
          .status(400)
          .json({ message: 'Please, send your email and password' });

      const dataProvider = {
        //image: `uploads\\${file}`,
        image: req.file?.path,
        firstName,
        lastName,
        gender,
        email,
        phone,
        password,
        // hasCalendar,
      };

      const newProvider = new Providers(dataProvider);
      if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newProvider.roles = foundRoles.map((role: any) => role._id);
      }

      const savedProvider = await newProvider.save();
      return res.status(201).send({
        data: savedProvider,
        message: `Felicitaciones, ${newProvider.firstName}! Ya eres parte del equipo de Estetic-Aap.`,
      });
    } catch (error: any) {
      res.status(501).send({
        message: 'Algo salió mal. Por favor vuelve a intentarlo.',
      });
    }
  }
};

//SIGNUP USERS: user / provider

export const signIn: RequestHandler = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Please, send your email and password' });

  //USER
  const userFound = await Users.findOne({ email: email });
  if (!userFound) {
    const providerFound = await Providers.findOne({ email: email });
    if (!providerFound)
      return res.status(400).json({ message: 'The user does not exist' });

    const isMatchProvider = await providerFound.comparePassword(password);
    if (isMatchProvider)
      return res.json({ providerFound, token: createToken(providerFound) });

    return res.status(400).json({ message: 'The user does not exist' });
  }

  const isMatch = await userFound.comparePassword(password);

  if (isMatch) return res.json({ userFound, token: createToken(userFound) });
  else
    return res
      .status(400)
      .json({ message: 'The email or password are incorrect' });
};
