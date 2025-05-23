import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircleIcon } from "lucide-react";
import { useStudentByMatricula } from "../../../hooks/useStudentByMatricula";

interface FormData {
  matricula: string;
  nombre: string;
  grupo: string;
  carrera: string;
  turno: string;
  tramite: string;
}

export function StudentModal() {
  const [formData, setFormData] = useState<FormData>({
    matricula: "",
    nombre: "",
    grupo: "",
    carrera: "",
    turno: "",
    tramite: "",
  });

  const { studentData, loading, error, fetchStudent } = useStudentByMatricula();

  const [tramites, setTramites] = useState<{ id: number; nombre: string }[]>(
    []
  );

  useEffect(() => {
    if (studentData) {
      setFormData((prev) => ({
        ...prev,
        matricula: studentData.matricula || prev.matricula,
        nombre: studentData.nombre,
        grupo: studentData.grupo,
        carrera: studentData.carrera,
        turno: studentData.turno,
      }));
    }
  }, [studentData]);

  useEffect(() => {
    const fetchTramites = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/universidad/tramites"
        );
        const data = await response.json();
        setTramites(data);
      } catch (error) {
        console.error("Error fetching tramites:", error);
      }
    };
    fetchTramites();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMatriculaBlur = () => {
    if (formData.matricula.length === 8) {
      fetchStudent(formData.matricula);
    }
  };

  const isFormComplete = (): boolean => {
    return (
      formData.matricula.trim().length === 8 &&
      formData.nombre.trim() !== "" &&
      formData.grupo.trim() !== "" &&
      formData.carrera.trim() !== "" &&
      formData.turno.trim() !== "" &&
      formData.tramite.trim() !== ""
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full justify-start gap-2 bg-black text-white hover:bg-black/90"
          variant="default"
        >
          <PlusCircleIcon className="h-5 w-5" />
          <span>Nuevo Trámite</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Agregue un nuevo trámite</DialogTitle>
          <DialogDescription>
            Ingrese los datos del estudiante
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {[
              { id: "matricula", label: "Matrícula", disabled: false },
              { id: "nombre", label: "Nombre", disabled: true },
              { id: "grupo", label: "Grupo", disabled: true },
              { id: "carrera", label: "Carrera", disabled: true },
              { id: "turno", label: "Turno", disabled: true },
            ].map(({ id, label, disabled }) => (
              <div className="grid grid-cols-4 items-center gap-4" key={id}>
                <Label htmlFor={id} className="text-right">
                  {label}
                </Label>
                <Input
                  id={id}
                  name={id}
                  value={formData[id as keyof FormData]}
                  onChange={handleChange}
                  onBlur={id === "matricula" ? handleMatriculaBlur : undefined}
                  className="col-span-3"
                  disabled={disabled}
                  placeholder={disabled ? "" : `${label}`}
                />
              </div>
            ))}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tramite" className="text-right">
                Tipo de trámite
              </Label>
              <select
                id="tramite"
                name="tramite"
                value={formData.tramite}
                onChange={handleChange}
                className="col-span-3 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Seleccione un trámite</option>
                {tramites.map((tramite) => (
                  <option key={tramite.id} value={tramite.nombre}>
                    {tramite.nombre}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-red-500 text-sm col-span-4 text-center">
                {error}
              </p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!isFormComplete() || loading}>
              {loading ? "Buscando..." : "Generar Trámite"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
