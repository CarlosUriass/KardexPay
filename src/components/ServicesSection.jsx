import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      image: "src/assets/constancia_ejemplo.webp",
      title: "Constancia de estudios",
      description: "Lorem Impsum",
    },
    {
      image: "src/assets/kardex_ejemplo.webp",
      title: "Kardex academico",
      description: "Lorem Ipsum",
    },
    {
      image: "src/assets/constancia_ejemplo.webp",
      title: "Otro tramite",
      description: "Lorem Ipsum",
    },
  ];

  return (
    <div
      className="h-[90vh] w-full bg-white relative flex items-center justify-center
      before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)]
      before:bg-[size:20px_20px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
