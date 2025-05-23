import { useState } from "react";
import { useLocation } from "react-router-dom";
import { HomeLayout } from "@/layouts/home/HomeLayout";
import StudentForm from "../components/StudentForm";
import RequestSummary from "../components/Summary";

interface Procedure {
  id: string;
  title: string;
  description: string;
  cost: number;
}

interface FormData {
  matricula: string;
  nombre: string;
  carrera: string;
  grupo: string;
  turno: string;
  email: string;
}

export default function CheckoutPage() {
  const location = useLocation();
  const selectedProcedure: Procedure | null = location.state?.procedure ?? null;
  const [ingresado, setIngresado] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    matricula: "",
    nombre: "",
    carrera: "",
    grupo: "",
    turno: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.matricula &&
      formData.nombre &&
      formData.carrera &&
      formData.grupo &&
      formData.turno &&
      formData.email
    ) {
      console.log("Formulario enviado:", formData);
      console.log("Trámite seleccionado:", selectedProcedure);
    } else {
      alert("Completa todos los campos del formulario.");
    }
  };

  if (!selectedProcedure) {
    return (
      <HomeLayout>
        <div className="text-center text-red-600 text-xl mt-10">
          No se ha seleccionado ningún trámite.
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="lg:col-span-2 flex flex-col">
          <StudentForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            setFormData={setFormData}
          />
        </div>
        <div className="flex flex-col">
          <RequestSummary
            procedure={selectedProcedure}
            studentForm={formData}
            ingresado={ingresado}
            setIngresado={setIngresado}
          />
        </div>
      </div>
    </HomeLayout>
  );
}
