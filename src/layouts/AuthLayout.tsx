import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Auth pages with responsive container */}
      <div className="w-full max-w-4xl mx-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
