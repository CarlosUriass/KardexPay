import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/authService";
import { useAuth } from "../../../context/authContext";
import axios from "axios";

export function useAuthService() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function doLogin(email: string, password: string) {
    setLoading(true);
    try {
      const data = await loginService(email, password);
      login(data);
      navigate("/dashboard");
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error en login:", error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error("Error en login:", error.message);
      } else {
        console.error("Error desconocido en login");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { login: doLogin, loading };
}
