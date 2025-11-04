import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import DesktopHeader from "@/components/layout/DesktopHeader";

interface SettingsLayoutProps {
  children: ReactNode;
  title: string;
  showBackButton?: boolean;
}

const SETTINGS_TABS = [
  { path: "/settings/profile", label: "Profile" },
  { path: "/settings/security/change-password", label: "Security" },
  { path: "/settings/history", label: "Work History" },
  { path: "/settings/contact", label: "Contact" },
  { path: "/settings/privacy-policy", label: "Privacy" },
  { path: "/settings/about", label: "About" },
];

const SettingsLayout = ({ children, title, showBackButton = true }: SettingsLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

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
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`relative pb-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-black/60 hover:text-black"
                }`}
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
    </div>
  );
};

export default SettingsLayout;
