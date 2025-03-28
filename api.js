import axios from "axios";

const API_BASE_URL = "http://localhost:3000";  

export const getTopUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/top-users`);
  return response.data;
};

export const getTrendingPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/trending-posts`);
  return response.data;
};

export const getLiveFeed = async () => {
  const response = await axios.get(`${API_BASE_URL}/feed`);
  return response.data;
};
