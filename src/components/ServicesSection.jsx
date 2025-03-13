import { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/servicios")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div
      className="h-auto w-full bg-white relative flex items-center justify-center overflow-y-auto" // Se asegura de que el contenedor pueda desplazarse
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" // Fondo de puntitos
      ></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 pt-15 max-w-screen-lg w-full px-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id_servicio}
            image="src/assets/constancia_ejemplo.webp"
            title={service.nombre}
            description={service.descripcion || "Descripción no disponible"} // Si no hay descripción, mostramos un valor por defecto
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
