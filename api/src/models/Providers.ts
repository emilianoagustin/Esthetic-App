import { Schema, model } from "mongoose";

const Providors = new Schema(
  {
    image: {
      type: Buffer,
      required: true,
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
    document: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v: string) {
          return /\S@\S.\mail.\S/.test(v);
        },
        message: "Por favor ingresar un email válido",
      },
    },
    cellphone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Providors", Providors);
