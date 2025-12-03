import { Home, MessageSquare, Bell, Settings, Building2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import styles from "./DesktopSidebar.module.css";
import logo from "@/assets/logo.svg";

const DesktopSidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: Home, label: "Home" },
    { path: "/assistant", icon: MessageSquare, label: "Chat" },
    { path: "/notifications", icon: Bell, label: "Notifications" },
    { path: "/companies", icon: Building2, label: "List of Companies" },
    { path: "/settings/profile", icon: Settings, label: "Settings" },
  ];

  const isActive = (path: string) => {
    if (path === "/home") {
      return location.pathname.startsWith("/home");
    }
    if (path === "/settings/profile") {
      return location.pathname.startsWith("/settings");
    }
    return location.pathname === path;
  };

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <Link to="/home" className="flex items-center justify-center h-20">
        <img src={logo} alt="AV Workforce" className="h-10 w-auto" />
      </Link>

      <nav className="flex-1 flex flex-col items-center py-10 gap-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all ${
                active
                  ? "bg-[#FCC40B] text-black shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              title={item.label}
            >
              <Icon className="w-7 h-7" /> {/* Was w-6 h-6 */}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default DesktopSidebar;
