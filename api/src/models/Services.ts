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
      ref: 'Providers',
      autopopulate: true
    }]
  },
  { versionKey: false, timestamps: true }
);

ServiceSchema.plugin(require('mongoose-autopopulate'));

export default model('Services', ServiceSchema);
