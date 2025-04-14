import api from "./api";

export const getRegularPrograms = async () => {
    try {
      const response = await api.get("/programs?categories=reguler", { 
        withCredentials: true,
      });

      console.log("Full API Response:", response);
      
      // The response data is already an array, no need for response.data.data
      if (!Array.isArray(response.data)) {
        throw new Error("API response is not an array");
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching regular programs:", error);
      return [];
    }
};