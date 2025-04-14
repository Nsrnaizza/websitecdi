import api from "./api";

// Fungsi untuk mengambil data galleries
export const getGalleries = async () => {
  try {
    const response = await api.get("/galleries", {
      withCredentials: true,
    });
    console.log("Response API:", response.data);
    return response.data.data; // Sesuaikan dengan struktur response backend
  } catch (error) {
    console.error("Error fetching galleries:", error);
    throw error;
  }
};

// Fungsi untuk membuat data gallery baru
export const createGallery = async (galleryData) => {
  try {
    const response = await api.post("/galleries", galleryData, {
      headers: {
        "Content-Type": "multipart/form-data", // Untuk upload file
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating gallery:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui data gallery
export const updateGallery = async (id, galleryData) => {
  try {
    const response = await api.put(`/galleries/${id}`, galleryData, {
      headers: {
        "Content-Type": "multipart/form-data", // Untuk upload file
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating gallery:", error);
    throw error;
  }
};

// Fungsi untuk menghapus data gallery
export const deleteGallery = async (id) => {
  try {
    const response = await api.delete(`/galleries/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting gallery:", error);
    throw error;
  }
};