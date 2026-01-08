import express from "express";
import questionsRoutes from "./routes/questionsRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/notes",questionsRoutes);

app.listen(port,()=>{
    console.log("Server Started on PORT : 3000");
})