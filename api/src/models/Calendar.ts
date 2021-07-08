import { Schema, model } from 'mongoose';

const CalendarSchema = new Schema(
    {
        eventsHours: {
            type: Array, // ['15:00', '']
            required: true,
        },
        provider: {
            type: Schema.Types.ObjectId,
            ref: 'Providers'
        },
        events: [{
            type: Schema.Types.ObjectId,
            ref: 'Events'
        }]
    },
    { versionKey: false, timestamps: true }
);

export default model('Calendar', CalendarSchema);