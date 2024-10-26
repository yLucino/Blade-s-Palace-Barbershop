import express from "express";
import { getMonthlyPlans } from "../../controllers/forHomeWebSite/monthlyPlan.controller.js";

const router = express.Router();

router.get("/", getMonthlyPlans);

export default router;