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
      className={`fixed inset-0 lg:left-[80px] z-40 ${backdropClassName} flex justify-center items-end md:items-center`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-full max-w-[100vw] lg:max-w-[calc(100vw-80px)]  /* respect sidebar on desktop */
          rounded-t-3xl animate-slide-up
          md:animate-none md:rounded-3xl
          md:w-[520px] md:max-w-[min(90vw,520px)]  /* constrain to content area */
          lg:max-w-[min(calc(100vw-80px-4rem),520px)]  /* account for sidebar + padding on large screens */
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
