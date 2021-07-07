import { Schema, model } from 'mongoose';
import { SERVICES_TYPES } from '../utils/constants';

const ServiceSchema = new Schema(
    {
        id: {
            type: Number,
            index: true,
            unique: true
        },
        name: {
            type: String,
            enum: SERVICES_TYPES,
            trim: true,
            required: true
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