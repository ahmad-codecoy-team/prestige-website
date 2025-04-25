import Logo from "@/components/ui/Logo";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-gradient-to-br bg-screen">
      <Logo />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
