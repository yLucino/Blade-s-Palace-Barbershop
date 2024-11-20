import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getServicesLeft = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/services-left`);
    return response.data;
  } catch (error) {
    console.log('Error in get all servicesLeft from backend', error);
  }
}

export const getServicesRight = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/services-right`);
    return response.data;
  } catch (error) {
    console.log('Error in get all servicesRight from backend', error);
  }
}

export const getMonthlyPlans = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/monthly-plans`);
    return response.data;
  } catch (error) {
    console.log('Error in get monthly plan from backend', error);
  }
}

export const getServicesLeftId = async (id: number | undefined) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/services-left/${id}`);
    return response.data
  } catch (error) {
    console.log('Error in get services-left id', error);
  }
}

export const getServicesRightId = async (id: number | undefined) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/services-right/${id}`);
    return response.data
  } catch (error) {
    console.log('Error in get services-right id', error);
  }
}