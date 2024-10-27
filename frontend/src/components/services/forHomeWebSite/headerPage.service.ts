import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getAddress = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/address`);
    return response.data
  } catch (error) {
    console.log('Error in get address from backend', error);
  }
}

export const getTelephone = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/telephone`);
    return response.data
  } catch (error) {
    console.log('Error in get telephone from backend', error);
  }
}