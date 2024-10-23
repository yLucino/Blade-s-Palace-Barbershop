import express from "express";
import { getSocialMedia } from "../controllers/socialMeida.controller.js";

const router = express.Router();

router.get("/", getSocialMedia);

export default router;