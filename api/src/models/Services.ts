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
      required: [true, 'Product price required'],
    },
    description: {
      type: String,
    },
    events: [{
      type: Schema.Types.ObjectId,
      ref: 'Events'
    }],
    providers: [{
      type: Schema.Types.ObjectId,
      ref: 'Providers'
    }]
  },
  { versionKey: false, timestamps: true }
);

export default model('Services', ServiceSchema);
