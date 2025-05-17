import { useState } from "react";
import Navbar from "../../../components/Navbar";
import AlumnosForm from "../components/AlumnosForm";
import PaymentDetails from "../components/PaymentDetails";

const Pago = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex justify-end">
        <AlumnosForm onFormCompleteChange={setIsFormComplete} />
        <PaymentDetails isFormComplete={isFormComplete} />
      </div>
    </>
  );
};

export default Pago;
