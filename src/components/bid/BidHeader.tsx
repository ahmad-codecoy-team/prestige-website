// src/components/bid/BidHeader.tsx
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

export default function BidHeader({ title, location, onBack, logoSrc }: Props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = scrollY < 80 ? 1 : Math.max(1 - (scrollY - 80) / 100, 0);
  const translateY = Math.min(scrollY / 4, 40);

  return (
    <header className="relative w-full">
      {/* Sticky top bar - full width on mobile/tablet, offset by sidebar on desktop */}
      <div className="fixed top-0 left-0 right-0 lg:left-[80px] z-50 bg-black text-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 pt-4 pb-2 flex items-center">
          <button onClick={onBack} className="p-2 -ml-2" aria-label="Go back">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center font-semibold text-lg">
            Job Details
          </div>
          <div className="w-8 h-6" />
        </div>
      </div>

      {/* Scroll-away section */}
      <motion.div
        className="bg-black text-white relative w-full pt-[72px] pb-6 text-center"
        style={{
          opacity,
          transform: `translateY(-${translateY}px)`,
          transition: "all 0.25s ease-out",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="flex justify-center mb-3">
            <img
              src={logoSrc || PLS}
              className="w-16 h-16 rounded-full object-cover"
              alt="Logo"
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-[#FCC40B] text-black px-4 py-1.5 rounded-full text-sm font-medium">
            <MapPin className="w-4 h-4" />
            <span className="truncate max-w-[220px]">{location}</span>
          </div>

          <h1 className="mt-3 font-semibold text-lg leading-tight">{title}</h1>
          <p className="uppercase tracking-wide text-white/90 text-sm">
            {location}
          </p>
        </div>
      </motion.div>
    </header>
  );
}
