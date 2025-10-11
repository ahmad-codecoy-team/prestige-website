import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any user session data
    localStorage.removeItem("prestige-website");
    localStorage.clear();

    // Redirect to login page
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
