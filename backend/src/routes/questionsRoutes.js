import express from "express";
import { createQuestion, deleteQuestion, getAllQuestions, updateQuestion } from "../controllers/questionsController.js";

const router = express.Router();

// Get request
router.get("/",getAllQuestions)

// Post request
router.post("/",createQuestion)

// delete request
router.delete("/:id",deleteQuestion)

// put request
router.put("/:id",updateQuestion)

export default router;