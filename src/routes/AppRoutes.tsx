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
import ChatRoom from "@/pages/chat/ChatRoom";
import Bid from "@/pages/bid";
import JobDetailsPage from "@/pages/job/JobDetails";
import Attendance from "@/pages/attendence/attendance";
// import CompletedJobDetails from "@/components/job/completedDetails";
import CompletedJobDetailsPage from "@/components/job/completedDetails.page";
import EditInvoice from "@/components/job/editInvoice";
import LeadQR from "@/components/job/LeadQR";

// ===== Settings Pages =====
import ContactUs from "@/pages/settings/ContactUs";
import WorkHistory from "@/pages/settings/WorkHistory";
import EditProfile from "@/pages/settings/EditProfile";
import SettingsChangePassword from "@/pages/settings/ChangePassword";
import PrivacyPolicy from "@/pages/settings/PrivacyPolicy";
import About from "@/pages/settings/About";
import Notifications from "@/pages/notifications";

// ===== Auth Utility Pages =====
import Logout from "@/components/auth/Logout";

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
          <Route path="/chat/:groupId" element={<ChatRoom />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="/job-details" element={<JobDetailsPage />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/lead-qr" element={<LeadQR />} />
          <Route path="/invoice" element={<CompletedJobDetailsPage />} />
          <Route path="/edit-invoice" element={<EditInvoice />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* ===== Individual Settings Pages ===== */}
          <Route
            path="/settings"
            element={<Navigate to="/settings/contactus" replace />}
          />
          <Route path="/settings/contactus" element={<ContactUs />} />
          <Route path="/settings/workhistory" element={<WorkHistory />} />
          <Route path="/workhistory" element={<WorkHistory />} />
          <Route path="/settings/editprofile" element={<EditProfile />} />
          <Route
            path="/settings/changepassword"
            element={<SettingsChangePassword />}
          />
          <Route path="/settings/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/settings/terms" element={<PrivacyPolicy />} />
          <Route path="/settings/about" element={<About />} />
          {/* ===== Logout Handler ===== */}
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Route>

      {/* ========= Optional 404 ========= */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
