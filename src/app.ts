import cors from "cors";
import express from "express";

import { errorHandler } from "./middleware/errorHandler";
import { bookRoutes } from "./modules/book/book.controller";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use(errorHandler);

export default app;
