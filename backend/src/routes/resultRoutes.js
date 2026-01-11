import express from "express";
import { deleteResult, getResult, postResult } from "../controllers/resultcontroller.js";

const router = express.Router();

router.get("/",getResult);

router.post("/",postResult);

router.delete("/:id",deleteResult);

export default router;