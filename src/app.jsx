// src/app.jsx
import React from "react";
import AppRoutes from "./routes/routes";
import { ServiceProvider } from "./context/ServiceContext"; // Importa el ServiceProvider
import "./styles/styles.css";

function App() {
  return (
    <ServiceProvider>
      <AppRoutes />
    </ServiceProvider>
  );
}

export default App;
