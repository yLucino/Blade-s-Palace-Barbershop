import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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