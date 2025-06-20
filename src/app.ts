import cors from "cors";
import express from "express";

import { errorHandler } from "./middleware/errorHandler";
import { bookRoutes } from "./modules/book/book.controller";
import { borrowRoutes } from "./modules/borrow/borrow.controller";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);
app.use(errorHandler);

export default app;
