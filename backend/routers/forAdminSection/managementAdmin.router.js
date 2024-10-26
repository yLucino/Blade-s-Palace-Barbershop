import express from "express";
import { 
  putAddressStreet, 
  putAddressDistrict, 
  putAddressCity, 
  putAddressState, 
  putAddressCEP, 
  putAddressNumber, 
  putAddressURLMaps, 
  putHourOpen,
  putHourClose,
  putStatusOpen
} from "../../controllers/forAdminSection/managementAdmin.controller.js";

const router = express.Router();

// Routers for Address PUT
router.put("/update-street/:id", putAddressStreet);
router.put("/update-district/:id", putAddressDistrict);
router.put("/update-city/:id", putAddressCity);
router.put("/update-state/:id", putAddressState);
router.put("/update-cep/:id", putAddressCEP);
router.put("/update-number/:id", putAddressNumber);
router.put("/update-url-google-maps/:id", putAddressURLMaps);

// Routers for OpeningHour PUT
router.put("/update-hour-open/:id", putHourOpen);
router.put("/update-hour-close/:id", putHourClose);
router.put("/update-status-open/:id", putStatusOpen);

export default router;