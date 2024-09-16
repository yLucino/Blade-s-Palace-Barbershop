import express from "express";
import { getCustomers } from "../controllers/customer.js";

const router = express.Router();

router.get("/", getCustomers);

export default router;