import express from "express";
import { getEmployeeBarbers } from "../../controllers/forHomeWebSite/employeeBarber.controller.js";

const router = express.Router();

router.get("/", getEmployeeBarbers);

export default router;