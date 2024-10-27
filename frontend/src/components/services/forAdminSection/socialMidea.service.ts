import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for SocialMedia PUT
export const putSocialMediaUrl = async (id: number, socialMediaUrl: string) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-social-midea-url/${id}`, { socialMediaUrl });

    if (response.status === 200) {
      return response.data.message;
    }
  } catch (error) {
    console.log('Error in put Social Midea Url', error);
  }
}