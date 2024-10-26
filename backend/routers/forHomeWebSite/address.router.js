import express from "express";
import { getAddress } from "../../controllers/forHomeWebSite/address.controller.js";

const router = express.Router();

router.get("/", getAddress);

export default router;