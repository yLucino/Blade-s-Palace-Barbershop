import axios from "axios"
import { Address } from "../../../app/shared/models/address";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for Address PUT | POST
// PUT
export const putStreet = async (id: number, street: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-street/${id}`, { street });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put Street:', error);
  }
}

export const putDistrict = async (id: number, district: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-district/${id}`, { district });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put District', error);
  }
}

export const putCity = async (id: number, city: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-city/${id}`, { city });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put City', error);
  }
}

export const putState = async (id: number, state: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-state/${id}`, { state });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put State', error);
  }
}

export const putCEP = async (id: number, cep: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-cep/${id}`, { cep });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put CEP', error);
  }
}

export const putNumber = async (id: number, number: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-number/${id}`, { number });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put Number', error);
  }
}

export const putUrlMaps = async (id: number, urlmaps: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-url-google-maps/${id}`, { urlmaps });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put URL Google Maps', error);
  }
}
// POST
export const postNewAddress = async (address: Address) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/admin/management/add-address`, { address });
    
    if (response.status === 201) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in post New Address:', error);
  }
}

// Axios request for OpeningHour PUT
export const putStatusOpen = async (id: number, status: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-status-open/${id}`, { status });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put Status Open', error);
  }
}

export const putHourOpen = async (id: number, open: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-hour-open/${id}`, { open });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put Hour Open', error);
  }
}

export const putHourClose = async (id: number, close: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-hour-close/${id}`, { close });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put Hour Close', error);
  }
}