import { Schema, model, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  image: string;
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  email: string;
  phone: number;
  password: string;
  event: any[];
  addresses: any[];
  comparePassword(password: string): Promise<boolean>;
}

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
    username: {
      type: String,
      min: 4,
      lowercase: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Non-binary"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
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
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
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
    crediCards: [
      {
        type: Schema.Types.ObjectId,
        ref: "CreditCards",
      },
    ],
  },

  { versionKey: false, timestamps: true }
  // versionKey para quitar el anuncio molesto de mongodb y timestamps para  saber cuando fue creado y cuando fue actualizado
);

UserSchema.pre<IUser>("save", async function (next) {
  const user = this;
  if (!user.isNew || !user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, (this as IUser).password);
};

UserSchema.plugin(require("mongoose-autopopulate")); // codigo para usar mongoose autopopulate

export default model<IUser>("Users", UserSchema); // la funcion model recibe 2 parametros el primero en nombre del modelo y el segundo el schema
