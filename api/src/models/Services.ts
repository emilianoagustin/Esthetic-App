import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String
        },
    },
    { versionKey: false, timestamps: true }
);

export default model('Services', ServiceSchema);