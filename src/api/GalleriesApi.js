import api from "api"; // Pastikan API sudah dikonfigurasi

export const getGalleries = async () => {
    try {
      const response = await api.get("/galleries", { 
        withCredentials: true, // Tambahkan ini agar cocok dengan CORS Laravel, sama seperti di be
      });

      // Cek jika response bukan JSON
      if (typeof response.data !== "object") {
        throw new Error("Response bukan JSON. Periksa API!");
      }
  
      console.log("Response API:", response.data);
      return response.data.data || [];
    } catch (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
};