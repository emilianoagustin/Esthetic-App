import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    image: {
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
    gender: {
      type: String,
      enum: ["Male", "Female", "Non-binary"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Events",
      },
    ],
    addresses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },

  { versionKey: false, timestamps: true }
  // versionKey para quitar el anuncio molesto de mongodb y timestamps para  saber cuando fue creado y cuando fue actualizado
);

UserSchema.plugin(require("mongoose-autopopulate")); // codigo para usar mongoose autopopulate

export default model("Users", UserSchema); // la funcion model recibe 2 parametros el primero en nombre del modelo y el segundo el schema
