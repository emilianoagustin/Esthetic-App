import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    events: [{
      type: Schema.Types.ObjectId,
      ref: 'Events'
    }]
  },
  { timestamps: true }
);

export default model('Services', ServiceSchema);
