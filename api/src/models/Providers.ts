import { Schema, model } from "mongoose";

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
    gender: {
      type: String,
      enum: ["Male", "Female", "Non-binary"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
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
    services: [{
      type: Schema.Types.ObjectId,
      ref: 'Services',
      unique: true
    }]
  },
  { versionKey: false, timestamps: true }
);

ProvidersSchema.plugin(require('mongoose-autopopulate'));

export default model("Providers", ProvidersSchema);
