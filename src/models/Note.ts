import mongoose, { Document, Model, Schema } from 'mongoose';

interface INote extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  content: string;
  category?: mongoose.Schema.Types.ObjectId;
}

const NoteSchema: Schema = new Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   // required: true,
  // },
},  
// { timestamps: true }
);

const Note: Model<INote> = mongoose.models.Note || mongoose.model<INote>('Note', NoteSchema);

export default Note;
export type { INote };
