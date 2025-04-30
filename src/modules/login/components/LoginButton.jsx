import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginButton({ buttonText, isEmailValid, email, password }) {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://kardexpaybackend.onrender.com/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        setIsSubmitting(false);
      }

      if (response.status == 404) {
        console.log("Usuario no encontrado");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        type="button" // <- Este es el fix
        className={`w-60 p-3 text-white rounded-lg cursor-pointer h-14 mt-10 mb-3 
          ${
            isEmailValid
              ? "bg-[#706cec] hover:bg-[#5a53c0]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        onClick={handleSubmit}
        disabled={!isEmailValid || isSubmitting}
      >
        {isSubmitting ? "Iniciando sesión..." : buttonText}
      </button>
    </>
  );
}

export default LoginButton;
