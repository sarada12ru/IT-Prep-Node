import mongoose from 'mongoose';
import ITech from '~/core/interfaces/ITech';
const { Schema, model } = mongoose;

const TechSchema = new Schema({
    tech: {
        type: String,
        required: true
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

const Tech = model<ITech>('Tech', TechSchema);
export default Tech;