// src/api/authService.js
import api from "./api";

export const registerUser = async (apiData) => {
  try {
    const response = await api.post("/register", {
      name: apiData.name,
      email: apiData.email,
      password: apiData.password,
      password_confirmation: apiData.confirmPassword,
      phone_number: apiData.no_hp,
      birthdate: apiData.birthdate,
      gender: apiData.gender,
      instansi: apiData.instansi,
    //   profession: apiData.profession,
    reference: apiData.reference,
      username: apiData.username
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      // Handle Laravel validation errors
      throw {
        errors: error.response.data.errors,
        message: "Validation failed"
      };
    }
    throw error;
  }
};