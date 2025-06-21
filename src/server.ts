import dotenv from "dotenv";
import { Request, Response } from "express";
import app from "./app";
import connectDB from "./config/database";

dotenv.config();

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1> LMS server running on ${port} port</h1>`);
});

async function server() {
  try {
    await connectDB(uri!);
    app.listen(port, () => {
      console.log(`LMS server running on ${port} port`);
    });
  } catch (error) {
    console.error("Failed to connect MongoDB", error);
  }
}
server();
