import { Schema, model } from 'mongoose';

const ProvidersSchema = new Schema(
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
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cellPhone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    hasCalendar: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

// ProvidersSchema.plugin(require('mongoose-autopopulate'));

export default model('Providers', ProvidersSchema);
