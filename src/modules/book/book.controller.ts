import express, { Request as Req, Response as Res } from "express";
import { Book } from "./book.model";

export const bookRoutes = express.Router();

// Add a book
bookRoutes.post("/add-book", async (req: Req, res: Res) => {
  try {
    const payload = req.body;
    const book = await Book.create(payload);

    res.status(201).json({
      success: true,
      message: "Book create successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
});
