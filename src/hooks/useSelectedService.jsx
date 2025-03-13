import { useState } from "react";

function useSelectedService() {
  const [selectedService, setSelectedService] = useState(null);

  const selectService = (service) => {
    // Actualizar el estado
    setSelectedService(service);
  };

  return [selectedService, selectService];
}

export default useSelectedService;
