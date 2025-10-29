import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User2, KeyRound, Trash2, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const UserSettingsSheet: React.FC<Props> = ({ open, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const go = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/40 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[71] transform transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="relative rounded-t-2xl bg-white shadow-2xl border-t border-black/10">
            {/* Drag handle */}
            <div className="flex justify-center pt-3">
              <span className="h-1.5 w-12 rounded-full bg-black/15" />
            </div>

            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 p-2 rounded-full hover:bg-black/5 active:scale-95"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="p-4 sm:p-6">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => go("/settings/editprofile")}
                    className="w-full flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:scale-[0.99] transition"
                  >
                    <span className="inline-flex items-center justify-center rounded-md bg-[#FCC40B]/20 text-[#FCC40B] p-2">
                      <User2 className="w-5 h-5" />
                    </span>
                    <span className="text-base font-semibold text-black">Edit profile</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => go("/settings/changepassword")}
                    className="w-full flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:scale-[0.99] transition"
                  >
                    <span className="inline-flex items-center justify-center rounded-md bg-[#FCC40B]/20 text-[#FCC40B] p-2">
                      <KeyRound className="w-5 h-5" />
                    </span>
                    <span className="text-base font-semibold text-black">Change Password</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => go("/settings/delete-account")}
                    className="w-full flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:scale-[0.99] transition"
                  >
                    <span className="inline-flex items-center justify-center rounded-md bg-[#FCC40B]/20 text-[#FCC40B] p-2">
                      <Trash2 className="w-5 h-5" />
                    </span>
                    <span className="text-base font-semibold text-black">Delete Account</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettingsSheet;