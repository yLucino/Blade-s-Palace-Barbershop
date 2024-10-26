import express from "express";
import { getServicesRight } from "../../controllers/forHomeWebSite/servicesRight.controller.js";

const router = express.Router();

router.get("/", getServicesRight);

export default router;