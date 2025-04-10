import { useNavigate } from "react-router-dom";

function ActionButton({ buttonText, route }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route);
  };
  return (
    <>
      <button
        type="submit"
        className="w-75 p-3 bg-[#706cec] text-white rounded-lg cursor-pointer h-14 mt-10 mb-3 hover:bg-[#5a53c0]"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </>
  );
}

export default ActionButton;
