import axios from "axios"
import { EmployeeTeam } from "../../../app/shared/models/employeeTeam";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for Team PUT | POST | DELETE
// PUT
export const putTeam = async (imageUrl: string, name: string, jobRole: string, whatsappUrl: string, instagramUrl: string, facebookUrl: string, description: string, businessAddress: string, barberId: number | undefined) => {
  try{
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-barber/${barberId}`, { imageUrl, name, jobRole, whatsappUrl, instagramUrl, facebookUrl, description, businessAddress });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put barber', error);
  }
}

// POST
export const postTeam = async (barber: EmployeeTeam) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/admin/management/add-barber`, { barber });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in post team', error);
  }
}

export const deleteTeam = async (barberId: number | undefined) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/admin/management/delete-barber/${barberId}`);

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in delete team', error);
  }
}