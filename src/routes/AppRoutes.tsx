import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import SignIn from "@/pages/login";
import Forgot from "@/pages/forgot";
import OTP from "@/pages/forgot/otp";
import ChangePassword from "@/pages/forgot/changePassword";
import SignUp from "@/pages/signup";

import Home from "@/pages/home";
import Chat from "@/pages/chat";
import Bid from "@/components/job/bid";
import ScheduledJobDetails from "@/components/job/scheduledDetails";
import Attendance from "@/components/job/attendance";
import CompletedJobDetails from "@/components/job/completedDetails";
import EditInvoice from "@/components/job/editInvoice";

// ===== Settings Pages =====
import ContactUs from "@/components/settings/contactUs";
import WorkHistory from "@/components/settings/WorkHistory";
import EditProfile from "@/components/settings/EditProfile";
import SettingsChangePassword from "@/components/settings/ChangePassword";
import PrivacyPolicy from "@/components/settings/PrivacyPolicy";
// import Terms from "@/components/settings/Terms";
import About from "@/components/settings/About";

// ===== Auth Utility Pages =====
// import Logout from "@/components/auth/Logout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ========= Public Auth Routes ========= */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* ========= Protected Routes ========= */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          {/* ===== Home & Core Pages ===== */}
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="/job-details" element={<ScheduledJobDetails />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/invoice" element={<CompletedJobDetails />} />
          <Route path="/edit-invoice" element={<EditInvoice />} />

          {/* ===== Individual Settings Pages ===== */}
          <Route
            path="/settings"
            element={<Navigate to="/settings/contactus" replace />}
          />
          <Route path="/settings/contactus" element={<ContactUs />} />
          <Route path="/settings/workhistory" element={<WorkHistory />} />
          <Route path="/settings/editprofile" element={<EditProfile />} />
          <Route
            path="/settings/changepassword"
            element={<SettingsChangePassword />}
          />
          <Route path="/settings/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/settings/terms" element={<PrivacyPolicy />} />
          <Route path="/settings/about" element={<About />} />

          {/* ===== Logout Handler ===== */}
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Route>
      </Route>

      {/* ========= Optional 404 ========= */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
