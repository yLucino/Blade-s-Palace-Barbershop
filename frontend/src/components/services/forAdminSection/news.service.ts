import axios from "axios"
import { NewsModel } from "../../../app/shared/models/news";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios request for News PUT | POST | DELETE
// PUT
export const putNews = async (news: NewsModel) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/admin/management/update-news/${news.id}`, {
      title: news.title,
      subTitle: news.subTitle,
      description: news.description,
      imageUrl: news.imageUrl 
    });

    if (response.status === 200) {
      return response.data.message
    }
  }  catch (error) {
    console.log('Error in put news:', error);
  }
}

// POST
export const postNews = async (news: NewsModel) => {
  console.log(news);
  try {
    const response = await axios.post(`${BACKEND_URL}/admin/management/add-news`, { 
      title: news.title,
      subTitle: news.subTitle,
      description: news.description,
      imageUrl: news.imageUrl
    });

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in post news:', error);
  }
}

// DELETE
export const deleteNews = async (newsId: number | undefined) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/admin/management/delete-news/${newsId}`);

    if (response.status === 200) {
      return response.data.message
    }
  } catch (error) {
    console.log('Error in delete news:', error);
  }
}