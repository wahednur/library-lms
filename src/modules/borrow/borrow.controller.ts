import express, {
  NextFunction,
  Request as Req,
  Response as Res,
} from "express";
import { Book } from "../book/book.model";
import { Borrow } from "./borrow.model";

export const borrowRoutes = express.Router();

// 6. Borrow a Book
borrowRoutes.post("/new-borrow", async (req: Req, res: Res) => {
  try {
    const { bookId, quantity, dueDate } = req.body;

    // Book Check
    const existBook = await Book.findById(bookId);
    console.log(existBook);
    if (!existBook) {
      res.status(404).json({ success: false, message: "Book not found" });
    }

    // Quantity Check
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

// Aggregate borrow
borrowRoutes.get("/", async (req: Req, res: Res, next: NextFunction) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$bookId",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookInfo",
        },
      },
      {
        $unwind: "$bookInfo",
      },
      {
        $project: {
          _id: 0,
          totalQuantity: 1,
          book: {
            title: "$bookInfo.title",
            isbn: "$bookInfo.isbn",
          },
        },
      },
    ]);

    if (summary.length === 0) {
      res.status(404).json({
        success: false,
        message: "No borrow records found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    next(error);
  }
});
