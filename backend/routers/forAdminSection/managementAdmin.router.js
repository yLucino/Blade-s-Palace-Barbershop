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
  putStatusOpen,
  postNewAddress,
  deleteAddress,
} from "../../controllers/forAdminSection/managementAdmin.controller.js";

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

export default router;