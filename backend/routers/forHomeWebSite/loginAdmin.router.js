import express from "express";
import { postLoginAdmin } from "../../controllers/forHomeWebSite/loginAdmin.controller.js";

const router = express.Router();

router.post("/", postLoginAdmin);

export default router;