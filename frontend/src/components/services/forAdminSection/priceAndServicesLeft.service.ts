import axios from "axios"
import { Services } from "../../../app/shared/models/services";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for PriceAndSericeLeft PUT | POST | DELETE
// PUT
export const putServiceLeftTitle = async (id: number, title: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-left-title/${id}`, { title });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceLeft Title', error);
  }
}

export const putServiceLeftImageUrl = async (id: number, imageUrl: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-left-image-url/${id}`, { imageUrl });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceLeft ImageUrl', error);
  }
}

export const putServiceLeftDescription = async (id: number, description: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-left-description/${id}`, { description });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceLeft Description', error);
  }
}

export const putServiceLeftPriceNoPlan = async (id: number, priceNoPlan: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-left-price-no-plan/${id}`, { priceNoPlan });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceLeft PriceNoPlan', error);
  }
}

export const putServiceLeftPriceInPlan = async (id: number, priceInPlan: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-service-left-price-in-plan/${id}`, { priceInPlan });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put ServiceLeft PriceInPlan', error);
  }
}

// POST
export const postNewServiceLeft = async (serviceLeft: Services) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/admin-management/add-service-left`, {serviceLeft});

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in post newServiceLeft', error);
  }
}

// DELETE
export const deleteServiceLeft = async (id: number | undefined) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/admin-management/delete-service-left/${id}`);

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in delete ServiceLeft', error);
  }
}