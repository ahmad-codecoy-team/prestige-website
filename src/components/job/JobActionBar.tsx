// src/components/job/JobActionBar.tsx
import { Link } from "react-router-dom";

type Props = {
  isLead?: boolean;
  onCallOffice: () => void;
  signInTo: string;
  signInState?: { isLead: boolean };
};

export default function JobActionBar({
  isLead,
  onCallOffice,
  signInTo,
  signInState,
}: Props) {
  const handleCallOffice = () => {
    // Open phone dialer with office number
    window.location.href = 'tel:+1234567890'; // Replace with actual office number
    if (onCallOffice) onCallOffice();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FCC40B] lg:left-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-4 pt-1">
        <div className="w-full space-y-3">
          {/* Call Office - always visible */}
          <button
            onClick={handleCallOffice}
            className="w-full h-12 rounded-[28px] bg-black text-[#FCC40B] font-semibold active:scale-[0.98] transition text-sm sm:text-base"
          >
            Call Office
          </button>

          {/* Sign In / Scan Attendance */}
          <Link to={signInTo} state={signInState} className="block">
            <button className="w-full h-12 rounded-[28px] bg-[#4CB050] text-white font-semibold active:scale-[0.98] transition text-sm sm:text-base">
              {isLead ? "Sign in" : "Sign in"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
