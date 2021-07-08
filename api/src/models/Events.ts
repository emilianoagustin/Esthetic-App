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
            type: Date,
            required: true
        },
        isActive: {
            type: Boolean
        },
        service: {
            type: Schema.Types.ObjectId,
            ref: 'Services'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        },
        provider: {
            type: Schema.Types.ObjectId,
            ref: 'Providers'
        },
    },
    { versionKey: false, timestamps: true }
);

export default model('Events', EventSchema);