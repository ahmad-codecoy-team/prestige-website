import { Link, useLocation } from "react-router-dom";
import navItems from "./navItems";

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white flex justify-around items-center h-16 lg:hidden z-50">
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
  );
};

export default BottomNav;
