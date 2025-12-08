import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // Replace with real auth check
  return (
    !!localStorage.getItem("prestige-website") ||
    !!localStorage.getItem("prestige-token") ||
    !!localStorage.getItem("prestige-user")
  );
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
