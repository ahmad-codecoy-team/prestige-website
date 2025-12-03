import { useEffect, useState, useCallback } from "react";

/**
 * Ensures the page is viewed in landscape.
 * - Tries to lock orientation to landscape (best-effort; requires fullscreen/gesture in many browsers).
 * - Shows a full-screen overlay in portrait, instructing the user to rotate.
 */
export default function LandscapeOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPortrait, setIsPortrait] = useState(false);
  const [triedLock, setTriedLock] = useState(false);

  const updateOrientation = useCallback(() => {
    const mq = window.matchMedia("(orientation: portrait)");
    setIsPortrait(mq.matches);
  }, []);

  useEffect(() => {
    // Initial check and listener
    updateOrientation();
    const mq = window.matchMedia("(orientation: portrait)");
    const handler = () => updateOrientation();
    mq.addEventListener?.("change", handler);
    window.addEventListener("orientationchange", handler);
    window.addEventListener("resize", handler);
    return () => {
      mq.removeEventListener?.("change", handler);
      window.removeEventListener("orientationchange", handler);
      window.removeEventListener("resize", handler);
    };
  }, [updateOrientation]);

  // Best-effort lock on first user interaction (more reliable than on mount)
  const tryLockLandscape = useCallback(async () => {
    if (triedLock) return;
    setTriedLock(true);
    try {
      // Enter fullscreen if not already (many UAs require fullscreen before lock)
      if (
        !document.fullscreenElement &&
        document.documentElement.requestFullscreen
      ) {
        await document.documentElement.requestFullscreen();
      }
      // Attempt orientation lock; not available on iOS Safari
      // @ts-expect-error - screen.orientation.lock is not available in all browsers
      if (screen.orientation?.lock) {
        // @ts-expect-error - screen.orientation.lock is not available in all browsers
        await screen.orientation.lock("landscape");
      }
    } catch {
      // Ignore failures; overlay will handle portrait case
    }
  }, [triedLock]);

  // Also attempt once on mount — some browsers allow without gesture
  useEffect(() => {
    (async () => {
      try {
        // @ts-expect-error - screen.orientation.lock is not available in all browsers
        if (screen.orientation?.lock) {
          // @ts-expect-error - screen.orientation.lock is not available in all browsers
          await screen.orientation.lock("landscape");
        }
      } catch {
        // ignore
      }
    })();
  }, []);

  return (
    // <div className="relative w-screen h-screen overflow-hidden bg-gray-100">
    <div className="relative w-full h-dvh overflow-y-auto overflow-x-hidden bg-gray-100">
      {/* App content */}
      <div
        aria-hidden={isPortrait}
        className={isPortrait ? "pointer-events-none select-none" : ""}
      >
        {children}
      </div>

      {/* Portrait blocker */}
      {isPortrait && (
        <button
          onClick={tryLockLandscape}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white p-6 text-center"
        >
          <div className="max-w-sm space-y-4">
            <h2 className="text-base font-semibold">Rotate your device</h2>
            <p className="text-sm opacity-90">
              This page is designed for landscape so it fits on one screen like
              a PDF. Please rotate your device to continue.
            </p>
            <span className="inline-block text-xs opacity-75">
              Tap to try switching to landscape (supported browsers only)
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
