import { FiArrowLeft } from "react-icons/fi";

interface BackButtonProps {
  onClick?: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-black hover:opacity-70 transition-opacity"
      aria-label="Go back"
    >
      <FiArrowLeft size={28} />
    </button>
  );
};
