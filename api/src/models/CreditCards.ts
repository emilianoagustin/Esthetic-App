import { Schema, model } from "mongoose";

const CreditCardSchema = new Schema(
  {
    type_of_card: {
      type: String,
      enum: ["Visa", "MasterCard", "Amex"],
      required: true,
    },
    card_number: {
      type: String,
      required: true,
    },
    card_holder: {
      type: String,
      required: true,
    },
    exp_date: {
      type: String,
      required: true,
    },
    verif_code: {
      type: String,
      required: true,
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
