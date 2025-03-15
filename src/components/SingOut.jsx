import { MdLogout } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const [isSignedOut, setIsSignedOut] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Elimina el token directamente
    setIsSignedOut(true);
    navigate("/login");
  };

  return (
    <div className="flex justify-center">
      <button
        className="relative z-10 flex items-center gap-2 bg-white w-40 h-20 shadow-lg rounded-lg cursor-pointer p-4"
        onClick={handleSignOut}
        disabled={isSignedOut}
      >
        <MdLogout className="h-6 w-6 text-gray-600" />
        <span className="font-light text-sm">Cerrar Sesión</span>
      </button>
    </div>
  );
}

export default SignOut;
