import { Schema, model } from "mongoose";

const AddressSchema = new Schema(
    {
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address_1: {
        type: String,
        required: true,
    },
    address_details: {
        type: String,
    },
    zip_code: {
        type: String,
        required: true,
    },
    is_main: {
        type: Boolean,
        default: true,
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: "Providers",
        autopopulate: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        autopopulate: true,
      },
    },
  { versionKey: false, timestamps: true }
);
AddressSchema.plugin(require("mongoose-autopopulate"));
export default model("Address", AddressSchema);