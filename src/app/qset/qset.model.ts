import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const QSetSchema = new Schema({
    questionSet: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        default: 'Admin'
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedBy: {
        type: String,
        default: 'Admin'
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    }
})

const QSet = model('QSet', QSetSchema);
export default QSet;