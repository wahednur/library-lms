import dotenv from "dotenv";
import { Request, Response } from "express";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1> LMS server running on ${port} port</h1>`);
});

async function server() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("LMS MongoDB connected");
    app.listen(port, () => {
      console.log(`LMS server running on ${port} port`);
    });
  } catch (error) {
    console.error("Failed to connect MongoDB", error);
  }
}
server();
