import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Types;

const QNASchema = new Schema({
    question: {
        type: Text,
        required: true
    },
    hint: {
        type: Text,
        required: true
    },
    answer: {
        type: Text,
        required: true
    },
    code: {
        type: Text,
        required: true
    },
    questionSet: {
        type: ObjectId,
        ref: 'QSet',
        default: null
    },
    tech: {
        type: ObjectId,
        ref: 'Tech',
        default: null
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

const QNA = model('QNA', QNASchema);
export default QNA;