import mongoose, { Document, Model, Schema } from 'mongoose';

interface ICategory extends Document {
  name: string;
}

const CategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

CategorySchema.virtual('notes', {
    ref: 'Note',
    localField: '_id',
    foreignField: 'category',
});

const Category: Model<ICategory> = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
export type { ICategory };
