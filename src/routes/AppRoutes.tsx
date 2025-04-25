import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import SignIn from "@/pages/login";
import Forgot from "@/pages/forgot";
import OTP from "@/pages/forgot/otp";
import ChangePassword from "@/pages/forgot/changePassword";
import SignUp from "@/pages/signup";
// import SignUp from "../pages/SignUp";
// import Dashboard from "../pages/Dashboard";
// import NotFound from "../pages/NotFound";
// import ProtectedRoute from "./ProtectedRoute";
// import MainLayout from "../layouts/MainLayout";
// import AuthLayout from "../layouts/AuthLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Route>

      {/* Catch-all */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
