import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import LandingPage from "./pages/LandingPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage></LandingPage>
  </StrictMode>
);
