import express from "express";
import { addSettings, getSettings, updateSettings } from "../controllers/settingsController.js";

const router = express.Router();

router.get("/",getSettings);

router.put("/:id",updateSettings);

router.post("/",addSettings);


export default router;