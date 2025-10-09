import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  onClick?: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-black hover:opacity-70 transition-opacity"
      aria-label="Go back"
    >
      <FiArrowLeft size={28} />
    </button>
  );
};
