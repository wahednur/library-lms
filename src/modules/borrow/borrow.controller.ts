import express, { Request as Req, Response as Res } from "express";
import { Book } from "../book/book.model";
import { Borrow } from "./borrow.model";

export const borrowRoutes = express.Router();

// create/Add borrow
borrowRoutes.post("/new-borrow", async (req: Req, res: Res) => {
  try {
    const { bookId, quantity, dueDate } = req.body;

    // Book Check
    const existBook = await Book.findById(bookId);
    console.log(existBook);
    if (!existBook) {
      res.status(404).json({ success: false, message: "Book not found" });
    }

    // 2️⃣ Quantity Check
    if (quantity <= 0) {
      res.status(400).json({
        success: false,
        message: "Quantity must be greater than 0",
      });
    }

    const borrow = await Borrow.create({ bookId, quantity, dueDate });

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    console.log(error);
  }
});
