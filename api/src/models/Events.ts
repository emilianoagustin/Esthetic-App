import { Schema, model } from "mongoose";

const EventSchema = new Schema(
  {
    condition: {
      type: String,
      enum: ["calcelled", "finalized", "pending"],
      default: "pending",
    },
    date: {
      type: String,
      required: true,
    },
    hour: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    userAlert: {
      type: Boolean,
      default: false,
    },
    providerAlert: {
      type: Boolean,
      default: false,
    },
    ratingAlert: {
      type: Boolean,
      default: false,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Services",
      autopopulate: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    calendar: {
      type: Schema.Types.ObjectId,
      ref: "Calendar",
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Addresses",
      autopopulate: true,
    }
  },
  { versionKey: false, timestamps: true }
);
EventSchema.plugin(require("mongoose-autopopulate"));
export default model("Events", EventSchema);
