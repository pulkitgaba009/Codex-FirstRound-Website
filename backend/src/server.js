import express from "express";
import questionsRoutes from "./routes/questionsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import settingsRoutes from "./routes/settingsRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true
  })
);

// app.use(cors())
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
