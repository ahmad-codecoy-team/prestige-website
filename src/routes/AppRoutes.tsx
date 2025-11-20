import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import SignIn from "@/pages/login";
import Forgot from "@/pages/forgot";
import OTP from "@/pages/forgot/otp";
import ChangePassword from "@/pages/forgot/changePassword";
import SignUp from "@/pages/signup";
import CompaniesList from "@/pages/companies/CompaniesList";
import CompanyApplication from "@/pages/companies/CompanyApplication";

import Home from "@/pages/home";
import AvailableShifts from "@/pages/home/AvailableShifts";
import ScheduledShifts from "@/pages/home/ScheduledShifts";
import CompletedShifts from "@/pages/home/CompletedShifts";
import BidDetailsPage from "@/pages/bid";
import Chat from "@/pages/chat";
import ChatRoom from "@/pages/chat/ChatRoom";
import AssistantChat from "@/pages/assistant";
import JobDetailsPage from "@/pages/job/JobDetails";
import Attendance from "@/pages/attendence/attendance";
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
        {/* Companies routes - outside MainLayout for full screen */}
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/company-application" element={<CompanyApplication />} />

        <Route element={<MainLayout />}>
          {/* ===== Home & Nested Routes ===== */}
          <Route path="/home" element={<Home />}>
            <Route index element={<AvailableShifts />} />
            <Route path="bid" element={<AvailableShifts />} />
            <Route path="schedule" element={<ScheduledShifts />} />
            <Route path="invoice" element={<CompletedShifts />} />
          </Route>

          {/* Bid details */}
          <Route path="/home/bid/:bidId" element={<BidDetailsPage />} />

          {/* Schedule job details */}
          <Route path="/home/schedule/:jobId" element={<JobDetailsPage />} />
          <Route
            path="/home/schedule/:jobId/attendance/:role"
            element={<Attendance />}
          />

          {/* Invoice/Completed job details */}
          <Route
            path="/home/invoice/:invoiceId"
            element={<CompletedJobDetailsPage />}
          />
          <Route
            path="/home/invoice/:invoiceId/edit"
            element={<EditInvoice />}
          />

          {/* Lead QR */}
          <Route path="/home/lead-qr" element={<LeadQR />} />

          {/* Chats and assistant */}
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:groupId" element={<ChatRoom />} />
          <Route path="/assistant" element={<AssistantChat />} />

          {/* Notifications */}
          <Route path="/notifications" element={<Notifications />} />

          {/* ===== Settings with cleaner paths ===== */}
          <Route
            path="/settings"
            element={<Navigate to="/settings/profile" replace />}
          />
          <Route path="/settings/profile" element={<EditProfile />} />
          <Route
            path="/settings/security/change-password"
            element={<SettingsChangePassword />}
          />
          <Route path="/settings/history" element={<WorkHistory />} />
          <Route path="/settings/contact" element={<ContactUs />} />
          <Route path="/settings/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/settings/terms" element={<PrivacyPolicy />} />
          <Route path="/settings/about" element={<About />} />

          {/* ===== Legacy redirects (back-compat) ===== */}
          <Route
            path="/workhistory"
            element={<Navigate to="/settings/history" replace />}
          />
          <Route
            path="/settings/contactus"
            element={<Navigate to="/settings/contact" replace />}
          />
          <Route
            path="/settings/editprofile"
            element={<Navigate to="/settings/profile" replace />}
          />
          <Route
            path="/settings/changepassword"
            element={
              <Navigate to="/settings/security/change-password" replace />
            }
          />
          <Route
            path="/job-details"
            element={<Navigate to="/home/bid" replace />}
          />
          <Route
            path="/attendance"
            element={<Navigate to="/home/schedule" replace />}
          />
          <Route
            path="/invoice"
            element={<Navigate to="/home/invoice" replace />}
          />
          <Route
            path="/edit-invoice"
            element={<Navigate to="/home/invoice" replace />}
          />
          <Route
            path="/lead-qr"
            element={<Navigate to="/home/lead-qr" replace />}
          />

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
