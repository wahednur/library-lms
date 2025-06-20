// book.controller.ts
import express, {
  NextFunction,
  Request as Req,
  Response as Res,
} from "express";
import { Book } from "./book.model";

export const bookRoutes = express.Router();

// Add a book
bookRoutes.post("/add-book", async (req: Req, res: Res, next: NextFunction) => {
  try {
    const payload = req.body;
    const book = await Book.create(payload);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
});

// Get books
bookRoutes.get("/", async (req: Req, res: Res, next: NextFunction) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    next(error);
  }
});
