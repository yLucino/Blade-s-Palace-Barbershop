import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for MonthlyPlan PUT
// PUT
export const putMonthlyPlanFull = async (id: number, priceFullPlan: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-monthly-plan-full/${id}`, { priceFullPlan });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put MonthlyPlan price full plan', error);
  }
}

export const putMonthlyPlanHalf = async (id: number, priceHalfPlan: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-monthly-plan-half/${id}`, { priceHalfPlan });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in put MonthlyPlan price half plan', error);
  }
}