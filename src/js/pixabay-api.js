import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY || '00000';
const BASE_URL =
  import.meta.env.VITE_PIXABAY_BASE_URL || 'https://pixabay.com/api/';

export async function searchImages(query, page = 1, perPage = 40) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  };

  try {
    const { data } = await axios.get(BASE_URL, { params });
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
}
