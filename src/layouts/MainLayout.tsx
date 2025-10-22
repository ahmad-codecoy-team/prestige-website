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
    // <div className="min-h-screen flex flex-col bg-[#FCC40B]">
    <div className="min-h-screen flex flex-col">
      {/* Main content with responsive container and background */}
      <div className="w-full max-w-4xl mx-auto min-h-screen flex flex-col bg-[#FCC40B]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
