import { useEffect, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { Bell, MessageSquare, Menu } from "lucide-react";
import Sidebar from "@/layouts/sidebar";
import DesktopHeader from "@/components/layout/DesktopHeader";

type TabKey = "bid" | "schedule" | "invoice";

const TABS: { key: TabKey; label: string }[] = [
  { key: "bid", label: "Bid" },
  { key: "schedule", label: "Schedule" },
  { key: "invoice", label: "Invoice" },
];

function Home() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabKey>("bid");
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  // Sync tab with URL
  useEffect(() => {
    if (location.pathname.startsWith("/home/schedule"))
      setActiveTab("schedule");
    else if (location.pathname.startsWith("/home/invoice"))
      setActiveTab("invoice");
    else setActiveTab("bid");
  }, [location.pathname]);

  return (
    <>
      {/* ===== Mobile Header ===== */}
      <header className="lg:hidden bg-black text-white sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            aria-label="Open menu"
            onClick={() => setShowSidebar(true)}
            className="p-1"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src="/logo.svg"
              alt="AV Workforce Logo"
              className="h-8 w-auto select-none bg-black"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Assistant chat button routes to /assistant */}
            <button
              aria-label="Messages"
              onClick={() => navigate("/assistant")}
              className="p-1"
            >
              <MessageSquare className="w-6 h-6" />
            </button>
            <button
              aria-label="Notifications"
              onClick={() => navigate("/notifications")}
              className="p-1"
            >
              <Bell className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ===== Tabs ===== */}
        <div className="flex justify-center gap-16 border-white/10">
          {TABS.map((t) => {
            const isActive = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => {
                  setActiveTab(t.key);
                  navigate(`/home/${t.key}`);
                }}
                className={`relative py-3 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-[-3px] h-[2px] w-full bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* ===== Desktop Header ===== */}
      <DesktopHeader title="Available Shifts">
        <div className="flex gap-8 pt-4 pb-3 border-b border-black/10">
          {TABS.map((t) => {
            const isActive = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => {
                  setActiveTab(t.key);
                  navigate(`/home/${t.key}`);
                }}
                className={`relative pb-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {t.label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </DesktopHeader>

      {/* ===== Tab Content ===== */}
      <main className="flex-1 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-4 md:px-6 md:py-6">
          <Outlet />
        </div>
      </main>




      {/* ===== Sidebar ===== */}
      <Sidebar open={showSidebar} onClose={() => setShowSidebar(false)} />
    </>
  );
}

export default Home;
