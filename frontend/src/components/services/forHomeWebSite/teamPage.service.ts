import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getTeam = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/employee-barbers`);
    return response.data
  } catch (error) {
    console.log('Error in get team from backend', error);
  }
}