import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

import navItems from "./navItems";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="fixed md:relative z-20 top-0 left-0 h-full w-20 bg-white">
      <div className="flex flex-col items-center py-6">
        <img src={logo} alt="Logo" className="w-15 h-20" />
        <nav className="flex flex-col gap-6 text-gray-700 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`p-2 rounded-xl hover:bg-gray-300 ${
                currentPath === item.path ? "bg-[#000000] text-white" : ""
              }`}
              title={item.label}
            >
              {item.icon}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
