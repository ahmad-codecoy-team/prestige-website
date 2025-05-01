import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import BottomNav from "./sidebar/BottomNav";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      {!isMobile && <Sidebar />}

      <div className="flex-1 flex flex-col md:ml-20 bg-screen">
        {/* Topbar */}

        <Header />

        <main className="flex-1 p-4 bg-gray-100 bg-screen">
          <Outlet />
        </main>
      </div>
      {isMobile && <BottomNav />}
    </div>
  );
};

export default MainLayout;
