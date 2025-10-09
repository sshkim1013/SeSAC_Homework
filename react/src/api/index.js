import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  timeout: 5000,
});

axiosInstance["interceptors"]["response"].use((response) => {
  return response["data"];
});

export default axiosInstance;
