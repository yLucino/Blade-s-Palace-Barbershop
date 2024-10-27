import axios from "axios"
import { Telephone } from "../../../app/shared/models/telephone";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios resquet for Telephone PUT | POST | DELETE 
// PUT
export const putNumber = async (id: number, number: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-number/${id}`, { number });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put Telephone Number', error);
  }
}

export const putUrl = async (id: number, url_api_whatsapp: string | undefined) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-url-whatsapp/${id}`, { url_api_whatsapp });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put Telephone URL Api Whatsapp', error);
  }
}

// POST
export const postTelephone = async (telephone: Telephone) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/admin/management/add-telephone`, { telephone });
    
    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in post Telephone', error);
  }
}

// DELETE
export const deleteTelephone = async (id: number | undefined) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/admin/management/delete-telephone/${id}`);

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in delete Telephone', error);
  }
}