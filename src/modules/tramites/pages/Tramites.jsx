import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import TramiteCard from "../components/TramiteCard";
import axios from "axios";
import capitalize from "../../../utils/string/capitalize";

function Tramites() {
  const [tramites, setTramites] = useState([]);

  useEffect(() => {
    const fetchTramites = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/getServices"
        );
        setTramites(response.data.allTramites);
      } catch (error) {
        console.error("Error al cargar los trámites:", error);
      }
    };

    fetchTramites();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-12 max-w-full mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Selecciona un trámite</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tramites.map((tramite) => (
            <TramiteCard
              key={tramite.id_servicio}
              title={capitalize(tramite.nombre)}
              description={capitalize(tramite.descripcion)}
              imageUrl={tramite.img || "src/assets/img/constancia_ejemplo.webp"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tramites;
