import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// Konfigurasi dasar untuk Axios
const instance: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // URL API Laravel Anda
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Middleware untuk menangani error global
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error("Axios error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default instance;
