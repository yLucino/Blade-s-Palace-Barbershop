import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getSummaryDay = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/summary-day`);
    return response.data
  } catch (error) {
    console.log('Error in get SummaryDay from backend', error);
  }
}