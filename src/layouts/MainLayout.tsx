import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCC40B]">
      {/* Main content */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
