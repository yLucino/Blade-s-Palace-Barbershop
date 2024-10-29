import axios from "axios"
import { Services } from "../../../app/shared/models/services";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for PriceAndSericeRight PUT | POST | DELETE
// PUT
export const putServiceRightTitle = async (id: number, title: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-right-title/${id}`, { title });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceRight Title', error);
  }
}

export const putServiceRightImageUrl = async (id: number, imageUrl: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-right-image-url/${id}`, { imageUrl });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceRight ImageUrl', error);
  }
}

export const putServiceRightDescription = async (id: number, description: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-right-description/${id}`, { description });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceRight Description', error);
  }
}

export const putServiceRightPriceNoPlan = async (id: number, priceNoPlan: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-right-price-no-plan/${id}`, { priceNoPlan });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceRight PriceNoPlan', error);
  }
}

export const putServiceRightPriceInPlan = async (id: number, priceInPlan: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-right-price-in-plan/${id}`, { priceInPlan });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceRight PriceInPlan', error);
  }
}

// POST
export const postNewServiceRight = async (serviceRight: Services) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/admin-management/add-service-right`, {serviceRight});

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in post newServiceRight', error);
  }
}

// DELETE
export const deleteServiceRight = async (id: number) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/admin-management/delete-service-right/${id}`);

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in delete ServiceRight', error);
  }
}