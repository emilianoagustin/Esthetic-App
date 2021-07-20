import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
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
        service: {
            type: Schema.Types.ObjectId,
            ref: 'Services',
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Users',
        },
        calendar: {
            type: Schema.Types.ObjectId,
            ref: 'Calendar',
        },
        address: {
            type: Schema.Types.ObjectId,
            ref: 'Addresses',
        },
    },
    { versionKey: false, timestamps: true }
);
EventSchema.plugin(require('mongoose-autopopulate'));
export default model('Events', EventSchema);
