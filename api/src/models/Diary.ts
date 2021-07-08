import { Schema, model } from 'mongoose';

const DiarySchema = new Schema(
    {
        eventsHours: {
            type: Array,
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

export default model('Diaries', DiarySchema);