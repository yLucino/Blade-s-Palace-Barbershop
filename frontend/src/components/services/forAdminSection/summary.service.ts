import axios from "axios"
import { SummaryDay } from "../../../app/shared/models/summaryDay";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for SummaryDay PUT
// PUT
export const putSummary = async (summary: SummaryDay) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-summary-day-service/${summary.id}`, {summary});

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put summary:', error);
  }
}