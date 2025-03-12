import ServiceCard from "./Card"; // Asegúrate de que la ruta sea correcta

function ServicesSection() {
  return (
    <div
      className="h-[90vh] w-full bg-white relative 
      before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]
      before:bg-[size:20px_20px]"
    >
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            image="src/assets/constancia_ejemplo.webp"
            title="Constancia de estudios"
            description="Lorem"
          />
          <ServiceCard
            image="src/assets/kardex_ejemplo.webp"
            title="Kardex de calificaciones"
            description="Lorem"
          />
          <ServiceCard image="" title="Otro Tramite" description="Lorem" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
