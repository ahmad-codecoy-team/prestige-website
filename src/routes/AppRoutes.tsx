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
import Home from "../pages/home";
import Chat from "../pages/chat";
import Bid from "@/components/job/bid";
import Settings from "@/pages/settings";
// import NotFound from "../pages/NotFound";

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
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="/settings" element={<Settings  />} />
        </Route>
      </Route>

      {/* Catch-all */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
