import express from "express";
import questionsRoutes from "./routes/questionsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import settingsRoutes from "./routes/settingsRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());

// app.use(rateLimiter);

// routes
app.use("/api/questions", questionsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/results", resultRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
  });
});
