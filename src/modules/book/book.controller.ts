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
      message: "Book created successfully",
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

//Get books

bookRoutes.get("/", async (req: Req, res: Res) => {
  try {
    const book = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
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
