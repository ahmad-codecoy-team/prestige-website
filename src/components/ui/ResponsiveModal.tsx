// src/components/ui/ResponsiveModal.tsx
import * as React from "react";
import { createPortal } from "react-dom";

type ResponsiveModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  /** Overlay color; e.g., "bg-black/50" or "bg-transparent" */
  backdropClassName?: string;
  /** Extra classes for the card (panel look lives here) */
  cardClassName?: string;
};

export default function ResponsiveModal({
  open,
  onClose,
  children,
  ariaLabel = "modal",
  backdropClassName = "bg-black/50",
  cardClassName = "",
}: ResponsiveModalProps) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const portalNode = document.getElementById("modal-root") ?? document.body;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className={`fixed inset-0 z-[100] ${backdropClassName} flex justify-center items-end md:block`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-full                    /* mobile bottom sheet */
          rounded-t-3xl animate-slide-up
          md:animate-none md:rounded-3xl
          md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
          md:w-[520px] md:max-w-[65vw]  /* <-- fixed, professional desktop width */
          md:shadow-2xl
          ${cardClassName}
        `}
      >
        {children}
      </div>
    </div>,
    portalNode
  );
}
