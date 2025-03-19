import React, { createContext, useState } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);

  const setService = (service) => {
    setSelectedService(service);
  };

  const ClearService = () => {
    setSelectedService(null);
  };

  return (
    <ServiceContext.Provider
      value={{ selectedService, setService, ClearService }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
