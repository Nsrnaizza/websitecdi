import api from "./api"; // Sesuaikan path sesuai struktur proyek

export const login = async ({ email, password }) => {
  try {
    const credentials = { 
      login: email.trim(), // Backend tampaknya mengharapkan "login", bukan "email"
      password: password.trim() 
    };

    console.log("Login Request Payload:", credentials); // Debugging

    const response = await api.post("/login", credentials, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    console.log("Login Response:", response.data); // Debugging

    return response.data; // Kembalikan data jika login berhasil
  } catch (error) {
    console.error("Login Error Response:", error.response ? error.response.data : error); // Debugging

    // Tangani error agar tidak crash
    if (error.response) {
      throw error.response.data; // API mengembalikan response error
    } else {
      throw { message: "Terjadi kesalahan pada server atau koneksi internet" };
    }
  }
};
