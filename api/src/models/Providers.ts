import { Schema, model } from 'mongoose';

const ProvidersSchema = new Schema(
  {
    image: {
      data: Buffer,
      contentType: String,
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
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cellphone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// ProvidersSchema.plugin(require('mongoose-autopopulate'));

export default model('Providers', ProvidersSchema);
