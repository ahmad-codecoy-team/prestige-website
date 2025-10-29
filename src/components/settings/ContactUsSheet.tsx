import React, { useEffect } from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ContactUsSheet: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const call = () => {
    onClose();
    window.location.href = "tel:"; // fill in later if number provided
  };

  const email = () => {
    onClose();
    window.location.href = "mailto:"; // fill in later if email provided
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/40 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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

            {/* Close button */}
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 p-2 rounded-full hover:bg-black/5 active:scale-95"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={call}
                    className="w-full flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:scale-[0.99] transition"
                  >
                    <span className="inline-flex items-center justify-center rounded-md bg-[#FCC40B]/20 text-[#FCC40B] p-2">
                      <FiPhoneCall className="w-5 h-5" />
                    </span>
                    <span className="text-base font-semibold text-black">
                      Call Us
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={email}
                    className="w-full flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-black/5 active:scale-[0.99] transition"
                  >
                    <span className="inline-flex items-center justify-center rounded-md bg-[#FCC40B]/20 text-[#FCC40B] p-2">
                      <FiMail className="w-5 h-5" />
                    </span>
                    <span className="text-base font-semibold text-black">
                      Email
                    </span>
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

export default ContactUsSheet;
