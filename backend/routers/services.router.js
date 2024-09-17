import express from "express";
import { getServices } from "../controllers/services.controller.js";

const router = express.Router();

router.get("/", getServices);

export default router;