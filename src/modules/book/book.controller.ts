// book.controller.ts
import express, {
  NextFunction,
  Request as Req,
  Response as Res,
} from "express";
import { Book } from "./book.model";

export const bookRoutes = express.Router();

// 1. Create Book
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

// 2. Get All Books
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

// 3. Get Book by ID
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

// 4. Update Book
bookRoutes.put(
  "/update/:bookId",
  async (req: Req, res: Res, next: NextFunction) => {
    try {
      const bookId = req.params.bookId;
      const updateDoc = req.body;
      // const book = await Book.findById(bookId);
      const update = await Book.findByIdAndUpdate(bookId, updateDoc);
      res.status(200).json({
        success: true,
        message: "Books updated successfully",
        data: update,
      });
    } catch (error) {
      next(error);
    }
  }
);

// 5. Delete Book
bookRoutes.delete(
  "/delete/:bookId",
  async (req: Req, res: Res, next: NextFunction) => {
    try {
      const bookId = req.params.bookId;
      const deleted = await Book.findOneAndDelete({ _id: bookId });

      res.status(200).json({
        success: true,
        message: "Books deleted successfully",
        data: deleted,
      });
    } catch (error) {
      next(error);
    }
  }
);
