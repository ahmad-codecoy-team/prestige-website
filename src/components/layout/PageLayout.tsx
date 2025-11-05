import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "./DesktopHeader";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  showBackButton?: boolean;
}

const PageLayout = ({
  children,
  title,
  showBackButton = true,
}: PageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FCC40B] flex flex-col">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-10 bg-[#FCC40B]">
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          {showBackButton && (
            <button
              aria-label="Back"
              onClick={() => navigate(-1)}
              className="p-1 -ml-1"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-base font-semibold flex-1 text-center">
            {title}
          </h1>
          <span className="w-6" />
        </div>
      </header>

      {/* Desktop Header */}
      <DesktopHeader title={title} />

      {/* Content */}
      <main className="flex flex-col flex-1">{children}</main>
    </div>
  );
};

export default PageLayout;
