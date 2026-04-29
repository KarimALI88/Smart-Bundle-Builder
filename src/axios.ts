import Axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_LINK;

const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
