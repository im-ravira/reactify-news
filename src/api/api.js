import axios from "axios";

const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `${API_DOMAIN}country=in&lang=en&category=${category}&apikey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const fetchNewsBySearch = async (query) => {
  try {
    const response = await axios.get(
      `${API_SEARCH_DOMAIN}q=${encodeURIComponent(query)}&lang=en&apikey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
