import { Schema, model, Document } from 'mongoose'

export interface IBook extends Document {
    name: string;
    author: string;
    imageURL: string;
}

const BooksSchema = new Schema({
    name: { type: String },
    author: { type: String },
    imageURL: { type: String }
});

export default model<IBook>('book', BooksSchema);