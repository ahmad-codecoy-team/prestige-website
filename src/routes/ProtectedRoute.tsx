import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // Replace with real auth check
  return !!localStorage.getItem("token");
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
