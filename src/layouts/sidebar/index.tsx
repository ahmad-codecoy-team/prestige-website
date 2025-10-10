import React from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import navItems from "./navItems";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

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
        <div className="flex flex-col items-center justify-center text-center mt-8 mb-6 px-4">
          <div className="w-20 h-20 rounded-full ring-2 ring-[#FCC40B] overflow-hidden mb-3">
            <img
              alt="Profile"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-bold text-lg text-black leading-tight">
            M. Ahmad
          </div>
          <div className="text-sm text-gray-600">ahmadhafeez1118@gmail.com</div>
        </div>

        {/* ===== Divider ===== */}
        <div className="border-t border-2 border-black/10 mb-2" />

        {/* ===== Navigation Items ===== */}
        <nav className="mt-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={onClose}>
              <div
                className={`flex items-center justify-between px-4 py-4 border-b-2 border-black/10 transition-colors ${
                  currentPath === item.path
                    ? "bg-[#FCC40B]/50 font-semibold"
                    : "hover:bg-black/5"
                }`}
              >
                <span className="flex items-center gap-3 text-gray-900">
                  <span className="text-gray-800">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </span>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
