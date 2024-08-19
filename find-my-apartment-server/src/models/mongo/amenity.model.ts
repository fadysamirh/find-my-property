import mongoose, { Schema, Document } from 'mongoose';

export interface IAmenity extends Document {
    name: string;
}

const amenitySchema: Schema = new Schema<IAmenity>({
    name: { type: String, required: true },
});

export default mongoose.model('amenity', amenitySchema);
