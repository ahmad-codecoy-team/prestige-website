// src/components/job/JobActionBar.tsx
import { Link } from "react-router-dom";

type Props = {
  isLead?: boolean;
  onCallOffice: () => void;
  signInTo: string;
  signInState?: any;
};

export default function JobActionBar({
  isLead,
  onCallOffice,
  signInTo,
  signInState,
}: Props) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40">
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-4 pt-1 bg-[#FCC40B]">
        <div className="w-full space-y-3">
          {/* Call Office - always visible */}
          <button
            onClick={onCallOffice}
            className="w-full h-12 rounded-[28px] bg-black text-[#FCC40B] font-semibold active:scale-[0.98] transition"
          >
            Call Office
          </button>

          {/* Sign In / Scan Attendance */}
          <Link to={signInTo} state={signInState} className="block">
            <button className="w-full h-12 rounded-[28px] bg-[#4CB050] text-white font-semibold active:scale-[0.98] transition">
              {isLead ? "Sign in" : "Sign in"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
