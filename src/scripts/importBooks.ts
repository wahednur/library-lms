import dotenv from "dotenv";
import mongoose from "mongoose";
import { Book } from "../modules/book/book.model";
import books from "./book.json";

dotenv.config();

async function importData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("✅ Connected to MongoDB");

    const inserted = await Book.insertMany(books);
    console.log(`🎉 Done inserting ${inserted.length} books.`);
    process.exit();
  } catch (error) {
    console.error("❌ Import failed:", error);
    process.exit(1);
  }
}

importData();
