import express from "express";
import questionsRoutes from "./routes/questionsRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv  from "dotenv";

dotenv.config();

const app = express();
const PORT =  process.env.PORT || 8080;

connectDB();

app.use(express.json());
app.use("/api/notes",questionsRoutes);

app.listen(PORT,()=>{
    console.log(`Server Started on PORT : ${PORT}`);
})