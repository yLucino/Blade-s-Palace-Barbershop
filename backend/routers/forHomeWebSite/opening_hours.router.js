import express from "express";
import { getOpeningHours } from "../../controllers/forHomeWebSite/opening_hours.controller.js";

const router = express.Router();

router.get("/", getOpeningHours);

export default router;