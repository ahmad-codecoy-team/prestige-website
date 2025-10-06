import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-black hover:opacity-70 transition-opacity"
      aria-label="Go back"
    >
      <FiArrowLeft size={28} />
    </button>
  );
};
