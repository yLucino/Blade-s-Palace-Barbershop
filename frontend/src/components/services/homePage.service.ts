import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getSocialMedia = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/social-media`);
    return response.data;
  } catch (error) {
    console.log('Error in get social media from backend', error);
  }
}