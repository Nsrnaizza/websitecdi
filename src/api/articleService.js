import API from "./api"; // Pastikan API sudah dikonfigurasi

export const getArticles = async (page = 1, limit = 12, category = "", searchQuery = "") => {
  try {
    let url = `/articles?page=${page}&per_page=${limit}`;

    // Kirim parameter kategori hanya jika bukan "Semua Kategori"
    if (category && category !== "Semua Kategori") {
      url += `&category=${encodeURIComponent(category)}`;
    }

    // Tambahkan parameter pencarian jika ada
    if (searchQuery.trim() !== "") {
      url += `&search=${encodeURIComponent(searchQuery)}`;
    }

    console.log("Fetching articles with URL:", url); // Debugging log

    const response = await API.get(url);

    if (typeof response.data !== "object") {
      throw new Error("Response bukan JSON. Periksa API!");
    }

    console.log("Response API Raw:", response);
    console.log("Response API Data:", response.data);

    const articles = response.data.data;
    const totalPages = response.data.last_page || 1;

    return {
      articles: Array.isArray(articles) ? articles : [],
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      articles: [],
      totalPages: 1,
    };
  }
};


// Tambahkan fungsi untuk mendapatkan artikel berdasarkan id
export const getArticleById = async (id) => {
  try {
    const response = await API.get(`/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article details:", error);
    return null;
  }
};

// api untuk categories
export const getCategories = async () => {
  try {
    const response = await API.get("/articles/categories", {
      withCredentials: true, // Pastikan kompatibel dengan CORS Laravel
    });

    if (!response.data || !Array.isArray(response.data.data)) {
      throw new Error("Response format tidak sesuai");
    }

    return response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// API untuk mendapatkan artikel rekomendasi berdasarkan ID artikel
export const getRecommendedArticles = async (id) => {
  try {
    const response = await API.get(`/articles/${id}/recommendations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recommended articles:", error);
    return [];
  }
};

export const getArticlesByAuthor = async (author, page = 1, limit = 12) => {
  try {
    const url = `/articles/ordered-by-author?author=${encodeURIComponent(author)}&page=${page}&per_page=${limit}`;
    console.log("Fetching articles by author with URL:", url);

    const response = await API.get(url);

    if (!response.data || typeof response.data !== "object") {
      throw new Error("Response bukan JSON. Periksa API!");
    }

    console.log("Response API Data:", response.data);

    const articles = response.data.data;
    const totalPages = response.data.last_page || 1;

    return {
      articles: Array.isArray(articles) ? articles : [],
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching articles by author:", error);
    return {
      articles: [],
      totalPages: 1,
    };
  }
};
