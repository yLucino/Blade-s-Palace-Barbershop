import express from "express";
import { 
  putAddressStreet, 
  putAddressDistrict, 
  putAddressCity, 
  putAddressState, 
  putAddressCEP, 
  putAddressNumber, 
  putAddressURLMaps 
} from "../../controllers/forAdminSection/managementAdmin.controller.js";

const router = express.Router();

router.put("/update-street/:id", putAddressStreet);
router.put("/update-district/:id", putAddressDistrict);
router.put("/update-city/:id", putAddressCity);
router.put("/update-state/:id", putAddressState);
router.put("/update-cep/:id", putAddressCEP);
router.put("/update-number/:id", putAddressNumber);
router.put("/update-url-google-maps/:id", putAddressURLMaps);

export default router;