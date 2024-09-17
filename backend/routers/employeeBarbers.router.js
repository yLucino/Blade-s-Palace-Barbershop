import express from "express";
import { getEmployeeBarbers } from "../controllers/employeeBarber.controller.js";

const router = express.Router();

router.get("/", getEmployeeBarbers);

export default router;