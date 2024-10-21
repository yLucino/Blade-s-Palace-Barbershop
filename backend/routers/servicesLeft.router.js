import express from "express";
import { getServicesLeft } from "../controllers/servicesLeft.controller.js";

const router = express.Router();

router.get("/", getServicesLeft);

export default router;