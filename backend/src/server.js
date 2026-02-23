import express from "express";
import questionsRoutes from "./routes/questionsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import settingsRoutes from "./routes/settingsRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import adminRoute from "./routes/authRoute.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// middleware

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:5173"],
      credentials: true,
    }),
  );
}

// app.use(cors())
app.use(express.json());

// app.use(rateLimiter);

// routes
app.use("/api/questions", questionsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/auth", adminRoute);

// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../codex-quiz-app/dist")));
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(
      path.join(__dirname, "../codex-quiz-app", "dist", "index.html"),
    );
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
  });
});
