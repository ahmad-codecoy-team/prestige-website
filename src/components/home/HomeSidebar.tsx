import {
  X,
  ChevronRight,
  Lock,
  User2,
  Info,
  LogOut,
  Trash2,
  FileText,
  PhoneCall,
  History,
} from "lucide-react";
import React from "react";

interface HomeSidebarProps {
  open: boolean;
  onClose: () => void;
}

export const HomeSidebar: React.FC<HomeSidebarProps> = ({ open, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-200 z-[60] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[86%] max-w-sm bg-[#F1ECF3] shadow-xl z-[61] transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4">
          <div className="w-14 h-14 rounded-full ring-2 ring-[#FCC40B] overflow-hidden">
            {/* replace with user's profile image if available */}
            <img
              alt="Profile"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
          <button aria-label="Close menu" onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-4 -mt-2">
          <div className="text-2xl font-bold leading-none">M.</div>
          <div className="text-sm text-gray-600">ahmadhafeez1118@gmail.com</div>
        </div>

        <div className="mt-4 border-t border-black/10" />

        {/* Menu list */}
        <nav className="mt-2">
          <SidebarItem
            icon={<PhoneCall className="w-5 h-5" />}
            label="Contact us"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<History className="w-5 h-5" />}
            label="Work History"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<User2 className="w-5 h-5" />}
            label="Edit profile"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<Lock className="w-5 h-5" />}
            label="Change Password"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<FileText className="w-5 h-5" />}
            label="Privacy Policy"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<FileText className="w-5 h-5" />}
            label="Terms And Conditions"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<Info className="w-5 h-5" />}
            label="About"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<LogOut className="w-5 h-5" />}
            label="Logout"
            onClick={() => {}}
          />
          <SidebarItem
            icon={<Trash2 className="w-5 h-5" />}
            label="Delete Account"
            onClick={() => {}}
          />
        </nav>
      </aside>
    </>
  );
};

const SidebarItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-black/5 border-b border-black/10"
  >
    <span className="flex items-center gap-3 text-gray-900">
      <span className="text-gray-800">{icon}</span>
      <span className="font-medium">{label}</span>
    </span>
    <ChevronRight className="w-5 h-5 text-gray-500" />
  </button>
);
