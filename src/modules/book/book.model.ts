import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    copies: { type: Number, required: true },
    available: { type: Boolean, required: true, default: true },
    publishYear: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const Book = model<IBook>("Book", bookSchema);
