import axios from "axios";

export interface Folio {
  folio: string;
  fecha_solicitud: string; // Puede cambiarse a Date si se transforma luego
  total: number;
  descuento: number;
  email: string;
  matricula: string;
  nombre_alumno: string;
  nombre_tramite: string;
  descripcion_tramite: string | null;
  costo: number;
  metodo_pago: string;
  carrera: string;
  id_unidad_academica: number;
  nombre_grupo: string;
  turno: string;
  tipo_programa: string;
  estatus_folio: string;
}

interface GetFoliosResponse {
  result: Folio[];
}

export const getAllFoliosByUnidadAcademica = async (
  id_unidad_academica: number
): Promise<Folio[] | null> => {
  try {
    const response = await axios.get<GetFoliosResponse>(
      `http://localhost:3000/api/data/folios/getAllFolios`,
      {
        params: { id_unidad_academica },
      }
    );

    return response.data.result;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al obtener los folios:",
        error.response?.data?.message || error.message
      );
    } else if (error instanceof Error) {
      console.error("Error al obtener los folios:", error.message);
    } else {
      console.error("Error desconocido al obtener los folios");
    }
    return null;
  }
};
