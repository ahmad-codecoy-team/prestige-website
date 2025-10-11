// src/components/job/JobActionBar.tsx
import { Link } from "react-router-dom";

type Props = {
  isLead?: boolean;
  onCallOffice: () => void; // same tel link trigger used before
  signInTo: string; // route ("/attendance")
  signInState?: any; // state to pass (e.g., { isLead })
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

          {/* Sign in */}
          <Link to={signInTo} state={signInState} className="block">
            <button className="w-full h-12 rounded-[28px] bg-[#4CB050] text-white font-semibold active:scale-[0.98] transition">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
