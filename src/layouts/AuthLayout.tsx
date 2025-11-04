import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Auth pages now handle their own backgrounds and constraints */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
