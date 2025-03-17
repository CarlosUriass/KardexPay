import React, { createContext, useState } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(null);

  const setService = (service) => {
    setSelectedService(service);
  };

  return (
    <ServiceContext.Provider value={{ selectedService, setService }}>
      {children}
    </ServiceContext.Provider>
  );
};
