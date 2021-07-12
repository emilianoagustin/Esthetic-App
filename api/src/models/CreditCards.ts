import { Schema, model } from "mongoose";

const CreditCardSchema = new Schema(
  {
    type_of_card: {
      type: String,
      enum: ["Visa", "MasterCard", "Amex"],
      required: true,
      trim: true,
    },
    card_number: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    card_holder: {
      type: String,
      required: true,
      trim: true,
    },
    exp_date: {
      type: String,
      required: true,
      trim: true,
    },
    verif_code: {
      type: Number,
      required: true,
      trim: true,
    },
    is_main: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      autopopulate: true,
    },
  },
  { versionKey: false, timestamps: true }
);
CreditCardSchema.plugin(require("mongoose-autopopulate"));
export default model("CreditCard", CreditCardSchema);
