import { useState } from "react";
import { getStudentByMatricula } from "../services/studentService";
import type { Student } from "../types/Student";

export const useStudentByMatricula = () => {
  const [studentData, setStudentData] = useState<Student | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStudent = async (matricula: string) => {
    if (matricula.length !== 8) {
      setStudentData(null);
      setError("La matrícula debe tener 8 caracteres");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data: Student = await getStudentByMatricula(matricula);
      setStudentData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("No se pudo obtener la información del alumno");
      }
      setStudentData(null);
    } finally {
      setLoading(false);
    }
  };

  return { studentData, loading, error, fetchStudent };
};
