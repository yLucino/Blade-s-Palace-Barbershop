import express from "express";
import { getServicesLeft } from "../../controllers/forHomeWebSite/servicesLeft.controller.js";

const router = express.Router();

router.get("/", getServicesLeft);

export default router;