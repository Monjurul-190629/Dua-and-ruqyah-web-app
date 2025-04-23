import axios from 'axios';

export const getSubCategory = async (id) => {
  const response = await axios.get(`https://dua-and-ruqyah-web-app-production.up.railway.app/subcategories/${id}`);
  return response.data;
};
