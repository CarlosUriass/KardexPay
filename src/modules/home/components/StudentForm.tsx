import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStudentByMatricula } from "../../../hooks/useStudentByMatricula";

interface FormData {
  matricula: string;
  nombre: string;
  carrera: string;
  grupo: string;
  turno: string;
  email: string;
}

interface FormProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function StudentForm({
  formData,
  onInputChange,
  onSubmit,
  setFormData,
}: FormProps) {
  const { studentData, loading, error, fetchStudent } = useStudentByMatricula();

  const fetchStudentRef = useRef(fetchStudent);

  useEffect(() => {
    fetchStudentRef.current = fetchStudent;
  }, [fetchStudent]);

  useEffect(() => {
    if (formData.matricula.length === 8) {
      fetchStudentRef.current(formData.matricula);
    } else {
      setFormData((prev) => ({
        ...prev,
        nombre: "",
        carrera: "",
        grupo: "",
        turno: "",
        email: "",
      }));
    }
  }, [formData.matricula, setFormData]);

  useEffect(() => {
    if (studentData) {
      setFormData((prev) => ({
        ...prev,
        nombre: studentData.nombre,
        carrera: studentData.carrera,
        grupo: studentData.grupo,
        turno: studentData.turno,
        email: studentData.email,
      }));
    }
  }, [studentData, setFormData]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">
          Ingresa tu matricula para continuar
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full">
        <form onSubmit={onSubmit} className="space-y-6 flex-grow">
          <div className="space-y-4">
            <div>
              <Label htmlFor="matricula">Matrícula</Label>
              <Input
                id="matricula"
                name="matricula"
                placeholder="12345678"
                value={formData.matricula}
                onChange={onInputChange}
                required
                maxLength={8}
                autoComplete="off"
                type="number"
              />
              {loading && (
                <p className="text-sm text-blue-600">Buscando alumno...</p>
              )}
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>

            <div>
              <Label htmlFor="nombre">Nombre Completo</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                disabled
                readOnly
              />
            </div>

            <div>
              <Label htmlFor="carrera">Carrera</Label>
              <Input
                id="carrera"
                name="carrera"
                value={formData.carrera}
                disabled
                readOnly
              />
            </div>

            <div>
              <Label htmlFor="grupo">Grupo</Label>
              <Input
                id="grupo"
                name="grupo"
                value={formData.grupo}
                disabled
                readOnly
              />
            </div>

            <div>
              <Label htmlFor="turno">Turno</Label>
              <Input
                id="turno"
                name="turno"
                value={formData.turno}
                disabled
                readOnly
              />
            </div>

            <div>
              <Label htmlFor="email">Correo electronico</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
