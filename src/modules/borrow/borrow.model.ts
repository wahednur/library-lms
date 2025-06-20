import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    bookId: {
      type: Schema.ObjectId,
      ref: "Book",
      required: [true, "Book Reference is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
