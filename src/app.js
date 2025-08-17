import express from "express";
import bookRoutes from "./routes/books.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app= express();

app.use(express.json());
app.use(logger);
app.use("/api/books", bookRoutes);

app.use(errorHandler);

export default app;
