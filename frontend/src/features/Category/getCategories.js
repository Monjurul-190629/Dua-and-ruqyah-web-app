import axios from 'axios';

export const getCategories = async () => {
  const response = await axios.get('https://dua-and-ruqyah-web-app-production.up.railway.app/categories');
  return response.data;
};
