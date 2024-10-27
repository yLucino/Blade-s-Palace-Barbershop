import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getOpeningHours = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/opening-hours`);
    return response.data
  } catch (error) {
    console.log('Error in get opening hours from backend', error);
  }
}