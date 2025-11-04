import { Outlet } from "react-router-dom";
import DesktopSidebar from "./sidebar/DesktopSidebar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#FCC40B]">
      {/* Desktop Sidebar - Fixed on large screens */}
      <DesktopSidebar />
      
      {/* Main Content Area */}
      <div className={styles.contentArea}>
        {/* Content wrapper with max-width for tablet constraint on desktop */}
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
