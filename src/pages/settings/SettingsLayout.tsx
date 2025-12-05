// src/components/layout/SettingsLayout.tsx
import { ReactNode, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import DesktopHeader from "@/components/layout/DesktopHeader";
import ResponsiveModal from "@/components/ui/ResponsiveModal";

interface SettingsLayoutProps {
  children: ReactNode;
  title: string;
  showBackButton?: boolean;
}

const SETTINGS_TABS = [
  { path: "/settings/profile", label: "Profile" },
  { path: "/settings/onboarding-documents", label: "Onboarding Documents" },
  { path: "/settings/security/change-password", label: "Security" },
  { path: "/settings/history", label: "Work History" },
  { path: "/settings/contact", label: "Contact" },
  { path: "/settings/privacy-policy", label: "Privacy" },
  { path: "/settings/about", label: "About" },
  { path: "/", label: "Logout" },
];

const SettingsLayout = ({
  children,
  title,
  showBackButton = true,
}: SettingsLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const isLogoutPath = (p: string) => p === "/";

  const handleConfirmLogout = () => {
    // TODO: add your auth cleanup here if needed
    // localStorage.removeItem("prestige-website");
    // any other tokens/cleanup…

    setShowLogoutConfirm(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FCC40B]">
      {/* Mobile Header */}
      <header className="lg:hidden bg-black text-white sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-4">
          {showBackButton && (
            <button
              aria-label="Back"
              onClick={() => navigate(-1)}
              className="p-1 -ml-1 text-white"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-lg font-semibold flex-1 text-center">{title}</h1>
          <span className="w-6" />
        </div>
      </header>

      {/* Desktop Header with Tabs */}
      <DesktopHeader title="Settings">
        <div className="flex gap-6 pt-4 pb-3 border-b border-black/10 overflow-x-auto">
          {SETTINGS_TABS.map((tab) => {
            const isActive = location.pathname === tab.path;
            const baseClasses =
              "relative pb-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap";
            const activeClasses = isActive
              ? "text-black font-semibold"
              : "text-black/60 hover:text-black";

            // Intercept Logout: open confirm modal instead of navigating
            if (isLogoutPath(tab.path)) {
              return (
                <button
                  key={tab.path}
                  type="button"
                  onClick={() => setShowLogoutConfirm(true)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {tab.label}
                </button>
              );
            }

            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`${baseClasses} ${activeClasses}`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </DesktopHeader>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Logout Confirm Modal */}
      {showLogoutConfirm && (
        <ResponsiveModal
          open={showLogoutConfirm}
          onClose={() => setShowLogoutConfirm(false)}
          ariaLabel="Confirm logout"
          backdropClassName="bg-black/50"
          cardClassName="bg-white px-6 py-6 rounded-t-3xl md:rounded-3xl"
        >
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Log out?
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              Are you sure you want to log out of your account?
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)}
                className="px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmLogout}
                className="px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium bg-black text-white hover:opacity-90 transition-opacity"
              >
                Logout
              </button>
            </div>
          </div>
        </ResponsiveModal>
      )}
    </div>
  );
};

export default SettingsLayout;
