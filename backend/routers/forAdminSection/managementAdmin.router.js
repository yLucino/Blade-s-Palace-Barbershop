import express from "express";
import { 
  putAddressStreet, 
  putAddressDistrict, 
  putAddressCity, 
  putAddressState, 
  putAddressCEP, 
  putAddressNumber, 
  putAddressURLMaps, 
  postNewAddress,
  deleteAddress,
} from "../../controllers/forAdminSection/managementAddress.controller.js";
import { 
  putHourOpen, 
  putHourClose, 
  putStatusOpen 
} from "../../controllers/forAdminSection/managementOpeningHour.controller.js";
import { 
  putTelephoneNumber,
  putTelephoneUrl,
  postNewTelephone,
  deleteTelephone
} from "../../controllers/forAdminSection/managementTelephone.controller.js";
import { putSocialMediaUrl } from "../../controllers/forAdminSection/managementSocialMedia.controller.js";
import { 
  deleteServiceLeft,
  postNewServiceLeft,
  putServiceLeftDescription,
  putServiceLeftImageUrl,
  putServiceLeftPriceInPlan,
  putServiceLeftPriceNoPlan,
  putServiceLeftTitle 
} from "../../controllers/forAdminSection/managementPriceAndServiceLeft.controller.js";
import { 
  deleteServiceRight,
  postNewServiceRight,
  putServiceRightDescription,
  putServiceRightImageUrl,
  putServiceRightPriceInPlan,
  putServiceRightPriceNoPlan,
  putServiceRightTitle
} from "../../controllers/forAdminSection/managementPriceAndServiceRight.controller.js";
import { putMonthyPlanPriceFullPlan, putMonthyPlanPriceHalfPlan } from "../../controllers/forAdminSection/managementMonthlyPlan.controller.js";
import { deleteBarber, postBarber, putBarber } from "../../controllers/forAdminSection/managementTeam.controller.js";
import { deleteNews, postNews, putNews } from "../../controllers/forAdminSection/managementNews.controller.js";

const router = express.Router();

// Routers for Address PUT | POST | DELETE
router.put("/update-street/:id", putAddressStreet);
router.put("/update-district/:id", putAddressDistrict);
router.put("/update-city/:id", putAddressCity);
router.put("/update-state/:id", putAddressState);
router.put("/update-cep/:id", putAddressCEP);
router.put("/update-number/:id", putAddressNumber);
router.put("/update-url-google-maps/:id", putAddressURLMaps);
router.post("/add-address", postNewAddress);
router.delete("/delete-address/:id", deleteAddress);

// Routers for OpeningHour PUT
router.put("/update-hour-open/:id", putHourOpen);
router.put("/update-hour-close/:id", putHourClose);
router.put("/update-status-open/:id", putStatusOpen);

// Routers for Telephone PUT | POST | DELETE
router.put("/update-number/:id", putTelephoneNumber);
router.put("/update-url-whatsapp/:id", putTelephoneUrl);
router.post("/add-telephone", postNewTelephone);
router.delete("/delete-telephone/:id", deleteTelephone);

// Router for Social Media PUT
router.put("/update-social-midea-url/:id", putSocialMediaUrl);

// Routers for PriceAndSeriveLeft PUT | POST | DELETE
router.put("/update-service-left-title/:id", putServiceLeftTitle);
router.put("/update-service-left-image-url/:id", putServiceLeftImageUrl);
router.put("/update-service-left-description/:id", putServiceLeftDescription);
router.put("/update-service-left-price-no-plan/:id", putServiceLeftPriceNoPlan);
router.put("/update-service-left-price-in-plan/:id", putServiceLeftPriceInPlan);
router.post("/add-service-left", postNewServiceLeft);
router.delete("/delete-service-left/:id", deleteServiceLeft);

// Routers for PriceAndSeriveRight PUT | POST | DELETE
router.put("/update-service-right-title/:id", putServiceRightTitle);
router.put("/update-service-right-image-url/:id", putServiceRightImageUrl);
router.put("/update-service-right-description/:id", putServiceRightDescription);
router.put("/update-service-right-price-no-plan/:id", putServiceRightPriceNoPlan);
router.put("/update-service-right-price-in-plan/:id", putServiceRightPriceInPlan);
router.post("/add-service-right", postNewServiceRight);
router.delete("/delete-service-right/:id", deleteServiceRight);

// Routers for MonthlyPlan PUT
router.put("/update-monthly-plan-full/:id", putMonthyPlanPriceFullPlan);
router.put("/update-monthly-plan-half/:id", putMonthyPlanPriceHalfPlan);

// Routers for Team PUT | POST | DELETE
router.put("/update-barber/:id", putBarber);
router.post("/add-barber", postBarber);
router.delete("/delete-barber/:id", deleteBarber);

// Routers for News PUT | POST | DELETE
router.put("/update-news/:id", putNews);
router.post("/add-news", postNews);
router.delete("/delete-news/:id", deleteNews);

export default router;