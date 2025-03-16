import axios from "axios";

const API = axios.create({
  baseURL: "https://cdi.rizkikurni.my.id/api", // Pastikan ini benar
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Jika perlu autentikasi
});

export default API;