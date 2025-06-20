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

bookRoutes.get("/:bookId", async (req: Req, res: Res, next: NextFunction) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
});

bookRoutes.patch(
  "/update/:bookId",
  async (req: Req, res: Res, next: NextFunction) => {
    try {
      const bookId = req.params.bookId;
      const updateDoc = req.body;
      const book = await Book.findById(bookId);
      const update = await Book.findByIdAndUpdate(bookId, updateDoc);
      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: update,
      });
    } catch (error) {
      next(error);
    }
  }
);
