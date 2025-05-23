import axios from "axios";

export const getStudentByMatricula = async (matricula: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/alumnos/getInfoByMatricula`,
      {
        params: { matricula: matricula },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("Error al obtener alumno:", error);
    throw error;
  }
};
