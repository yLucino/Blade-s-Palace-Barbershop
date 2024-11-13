import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getNews = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/news`);
    return response.data
  } catch (error) {
    console.log('Error in get news', error);
  }
}