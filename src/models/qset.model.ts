import mongoose from 'mongoose';
const { Schema, model, Types: {ObjectId} } = mongoose;

const QSetSchema = new Schema({
    questionSet: {
        type: String,
        required: true
    },
    tech: {
        type: ObjectId,
        ref: 'Tech',
        required: [true, 'Tech is Required']
    },
    notes: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
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