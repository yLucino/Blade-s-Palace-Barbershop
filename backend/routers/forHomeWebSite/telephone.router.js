import express from "express";
import { getTelephone } from "../../controllers/forHomeWebSite/telephone.controller.js";

const router = express.Router();

router.get("/", getTelephone);

export default router;