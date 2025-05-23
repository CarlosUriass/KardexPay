import axios from "axios";

export const getAllTramites = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/universidad/tramites`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los tramites");
    throw error;
  }
};
