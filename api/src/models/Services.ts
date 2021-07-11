import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      // required: [true, 'Product price required'],
      required: true,
    },
    description: {
      type: String,
    },
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Events',
      },
    ],
    providers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Providers',
        unique: true,
        autopopulate: true,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

ServiceSchema.plugin(require('mongoose-autopopulate'));

export default model('Services', ServiceSchema);
