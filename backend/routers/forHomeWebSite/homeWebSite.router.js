import express from "express";

import { postLoginAdmin } from "../../controllers/forHomeWebSite/loginAdmin.controller.js";
import { getOpeningHours } from "../../controllers/forHomeWebSite/opening_hours.controller.js";
import { getTelephone } from "../../controllers/forHomeWebSite/telephone.controller.js";
import { getSocialMedia } from "../../controllers/forHomeWebSite/socialMeida.controller.js";
import { getMonthlyPlans } from "../../controllers/forHomeWebSite/monthlyPlan.controller.js";
import { getServicesLeft, getServicesLeftId } from "../../controllers/forHomeWebSite/servicesLeft.controller.js";
import { getServicesRight, getServicesRightId } from "../../controllers/forHomeWebSite/servicesRight.controller.js";
import { getEmployeeBarbers } from "../../controllers/forHomeWebSite/employeeBarber.controller.js";
import { getAddress } from "../../controllers/forHomeWebSite/address.controller.js";

import { getCustomers } from "../../controllers/forHomeWebSite/customer.controller.js";
import { getNews } from "../../controllers/forHomeWebSite/news.controller.js";
import { getSummaryDay } from "../../controllers/forHomeWebSite/summaryDay.controller.js";

const router = express.Router();

router.post("/admin/login", postLoginAdmin);
router.get("/opening-hours", getOpeningHours);
router.get("/telephone", getTelephone);
router.get("/social-media", getSocialMedia);
router.get("/monthly-plans", getMonthlyPlans);
router.get("/services-left", getServicesLeft);
router.get("/services-right", getServicesRight);
router.get("/services-left/:id", getServicesLeftId);
router.get("/services-right/:id", getServicesRightId);
router.get("/employee-barbers", getEmployeeBarbers);
router.get("/address", getAddress);
router.get("/customers", getCustomers);
router.get("/news", getNews);
router.get("/summary-day", getSummaryDay);

export default router;