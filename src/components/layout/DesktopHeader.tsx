import { ReactNode } from "react";
import styles from "./DesktopHeader.module.css";

interface DesktopHeaderProps {
  title: string;
  children?: ReactNode;
}

const DesktopHeader = ({ title, children }: DesktopHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="px-4 py-4">
        {/* Top row: Title and Profile */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black">{title}</h1>
          
          {/* User Profile */}
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-black/10">
            <img
              alt="Profile"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tabs or additional content */}
        {children}
      </div>
    </header>
  );
};

export default DesktopHeader;
