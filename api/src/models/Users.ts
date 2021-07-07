import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    picture: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    dni: {
      type: Number,
      required: true,
      trim: true,
      unique: true, // con el fin de que no deje crear otro usuario con el mismo dni o cc segun el pais
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    asignated: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
  // versionKey para quitar el anuncio molesto de mongodb y timestamps para  saber cuando fue creado y cuando fue actualizado
);

UserSchema.methods.setPicture = () => {};

export default model('Users', UserSchema); // la funcion model recibe 2 parametros el primero en nombre del modelo y el segundo el schema
