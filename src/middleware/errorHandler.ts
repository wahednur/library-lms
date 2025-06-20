import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Check Mongoose Validation Error
  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error,
    });
    return;
  }

  //ISBN duplication error check
  if (error.code && error.code === 11000) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: {
        name: "ValidationError",
        errors: {
          isbn: {
            message: "ISBN must be unique",
            name: "ValidatorError",
            properties: {
              message: "ISBN must be unique",
              path: "isbn",
              value: error.keyValue.isbn,
            },
            kind: "unique",
            path: "isbn",
            value: error.keyValue.isbn,
          },
        },
      },
    });
    return;
  }

  //Others error
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Something went wrong",
    error,
  });
};
