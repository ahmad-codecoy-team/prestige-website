import { useEffect, useState } from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import PLS from "@/assets/PLS.png";

type Props = {
  title: string;
  location: string;
  onBack?: () => void;
  logoSrc?: string;
};

/**
 * BidHeader:
 * - Top black bar (back arrow + title) stays sticky at top.
 * - Lower section (logo + location pill + title/location) fades/slides away on scroll.
 * - On scroll back up, it reappears smoothly.
 */
export default function BidHeader({ title, location, onBack, logoSrc }: Props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control opacity and vertical movement based on scroll
  const opacity = scrollY < 80 ? 1 : Math.max(1 - (scrollY - 80) / 100, 0);
  const translateY = Math.min(scrollY / 4, 40); // max upward shift ~40px

  return (
    <header className="relative w-full">
      {/* Sticky Top Bar */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-50 bg-black text-white">
        <div className="w-full px-4 sm:px-6 pt-4 pb-2 flex items-center">
          <button
            onClick={onBack}
            aria-label="Back"
            className="p-2 -ml-2 rounded-full active:scale-95 transition"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <div className="flex-1 text-center font-semibold text-base sm:text-lg">
            Job Details
          </div>
          {/* Spacer to balance layout */}
          <div className="w-8 h-6" />
        </div>
      </div>

      {/* Animated lower section (scrolls away) */}
      <motion.div
        className="bg-black text-white relative z-40 w-full max-w-4xl mx-auto"
        style={{
          opacity,
          transform: `translateY(-${translateY}px)`,
          transition: "all 0.25s ease-out",
        }}
      >
        <div className="w-full px-4 sm:px-6 pb-6 pt-[72px] text-center">
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <img
              src={logoSrc || PLS}
              alt="Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full"
            />
          </div>

          {/* Yellow location pill */}
          <div className="inline-flex items-center gap-2 bg-[#FCC40B] text-black px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="truncate max-w-[200px]">{location}</span>
          </div>

          {/* Title + location text */}
          <div className="mt-3">
            <div className="font-semibold text-white text-base sm:text-lg leading-tight">
              {title}
            </div>
            <div className="uppercase tracking-wide text-white/90 text-xs sm:text-sm">
              {location}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer to keep layout consistent when lower section scrolls away */}
      {/* <div className="h-[60px]" /> */}
    </header>
  );
}
