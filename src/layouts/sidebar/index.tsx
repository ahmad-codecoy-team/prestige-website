import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import navItems, { NavItem } from "./navItems";
import UserSettingsSheet from "@/components/settings/UserSettingsSheet";
import ContactUsSheet from "@/components/settings/ContactUsSheet";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showUserSettings, setShowUserSettings] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  const isLink = (it: NavItem): it is Extract<NavItem, { path: string }> => {
    return (it as { path?: string }).path !== undefined;
  };

  const renderItem = (item: NavItem) => {
    const content = (
      <div
        className={`flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-b-2 border-black/10 transition-colors ${
          isLink(item) && currentPath === item.path
            ? "bg-[#FCC40B]/50 font-semibold"
            : "hover:bg-black/5"
        }`}
      >
        <span className="flex items-center gap-2 sm:gap-3 text-gray-900">
          <span className="text-gray-800 text-sm sm:text-base">{item.icon}</span>
          <span className="font-medium text-sm sm:text-base">{item.label}</span>
        </span>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
      </div>
    );

    if ("type" in item && item.type === "action") {
      if (item.id === "user-settings") {
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setShowUserSettings(true);
              onClose();
            }}
            className="w-full text-left"
          >
            {content}
          </button>
        );
      }
      if (item.id === "contact-us") {
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setShowContactUs(true);
              onClose();
            }}
            className="w-full text-left"
          >
            {content}
          </button>
        );
      }
    }

    // default: link item
    return isLink(item) ? (
      <Link key={item.path} to={item.path} onClick={onClose}>
        {content}
      </Link>
    ) : null;
  };

  return (
    <>
      {/* ===== Backdrop ===== */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-200 z-[60] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* ===== Drawer ===== */}
      <aside
        className={`fixed top-0 left-0 h-full w-[86%] max-w-sm bg-[#F7F2F9] shadow-xl z-[61] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* ===== Header: Profile Section ===== */}
        <div className="flex flex-col items-center justify-center text-center mt-6 sm:mt-8 mb-4 sm:mb-6 px-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-2 ring-[#FCC40B] overflow-hidden mb-3">
            <img
              alt="Profile"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-bold text-base sm:text-lg text-black leading-tight">
            M. Ahmad
          </div>
          <div className="text-xs sm:text-sm text-gray-600 truncate max-w-full px-2">
            ahmadhafeez1118@gmail.com
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="border-t border-2 border-black/10 mb-2" />

        {/* ===== Navigation Items ===== */}
        <nav className="mt-2">
          {navItems.map((item) => renderItem(item))}
        </nav>
      </aside>

      {/* User Settings Bottom Sheet */}
      <UserSettingsSheet
        open={showUserSettings}
        onClose={() => setShowUserSettings(false)}
      />
      <ContactUsSheet
        open={showContactUs}
        onClose={() => setShowContactUs(false)}
      />
    </>
  );
};

export default Sidebar;
