import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
        },
        hour: {
            type: Number,
            required: true,
        },
        isActive: {
            type: Boolean,
        },
        service: {
            type: Schema.Types.ObjectId,
            ref: 'Services',
            autopopulate: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Users',
            autopopulate: true,
        },
        calendar: {
            type: Schema.Types.ObjectId,
            ref: 'Calendar',
            autopopulate: true,
        },
    },
    { versionKey: false, timestamps: true }
);
EventSchema.plugin(require('mongoose-autopopulate'));
export default model('Events', EventSchema);
