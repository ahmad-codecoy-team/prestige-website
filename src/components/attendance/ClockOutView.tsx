import { Phone } from "lucide-react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState, useEffect } from "react";

interface Worker {
  name: string;
  review: number;
  clockOut?: string;
}

interface ClockOutViewProps {
  workers: Worker[];
  onReviewClick: (workerIndex: number) => void;
  onClockOutChange: (workerIndex: number, time: string) => void;
  onScanResult: (result: string) => void;
}

const ClockOutView = ({
  workers,
  onReviewClick,
  onClockOutChange,
  onScanResult,
}: ClockOutViewProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1024);
      setIsSmallMobile(width <= 480);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Dynamic font sizes based on screen size
  const getFontSizes = () => {
    if (isSmallMobile) {
      return {
        header: "text-sm",
        name: "text-sm",
        button: "text-xs",
        review: "text-xs",
        clockOut: "text-xs",
      };
    } else if (isMobile) {
      return {
        header: "text-base",
        name: "text-base",
        button: "text-sm",
        review: "text-sm",
        clockOut: "text-sm",
      };
    } else {
      return {
        header: "text-lg",
        name: "text-base",
        button: "text-base",
        review: "text-base",
        clockOut: "text-base",
      };
    }
  };

  const fontSizes = getFontSizes();

  return (
    <>
      {/* Camera Scanner - Only on mobile/tablet */}
      {isMobile && (
        <div className="bg-[#fbbf24] px-4 py-4">
          <div className="border-4 border-white rounded-2xl overflow-hidden">
            <Scanner
              onScan={(result) => {
                if (result && result[0]?.rawValue)
                  onScanResult(result[0].rawValue);
              }}
              constraints={{ facingMode: "environment" }}
              styles={{ container: { width: "100%", height: "300px" } }}
            />
          </div>
        </div>
      )}

      {/* Shift Information */}
      <div className="flex justify-between items-center px-4 py-3 text-black bg-[#fbbf24]">
        <div className={`font-semibold ${fontSizes.header}`}>
          Strike Technician
        </div>
        <div className={`font-semibold ${fontSizes.header}`}>08:00-19:00</div>
      </div>

      {/* Worker List - CARD */}
      <div className="flex-1 bg-[#fbbf24] pb-24">
        <div className="mx-4 rounded-2xl bg-white border border-gray-300 overflow-hidden">
          {/* HEADER (3 columns in one row) */}
          <div className="grid grid-cols-12 text-gray-900">
            <div
              className={`col-span-7 px-3 py-3 font-semibold ${fontSizes.header}`}
            >
              Name
            </div>
            <div
              className={`col-span-2 px-2 py-3 text-center font-semibold ${fontSizes.header}`}
            >
              Review
            </div>
            <div
              className={`col-span-3 px-2 py-3 text-center font-semibold ${fontSizes.header} border-l-2 border-gray-300 whitespace-nowrap`}
            >
              Clock Out
            </div>
          </div>

          {/* divider under header */}
          <div className="h-px bg-gray-300" />

          {/* ROWS */}
          {workers.map((worker, index) => (
            <div key={index}>
              <div className="grid grid-cols-12 items-center">
                {/* NAME */}
                <div className="col-span-7 px-3 py-3">
                  <div className="flex items-center gap-2">
                    <Phone
                      className="text-green-600"
                      size={isSmallMobile ? 16 : 20}
                    />
                    <span className={`${fontSizes.name} truncate`}>
                      {worker.name}
                    </span>
                  </div>
                </div>

                {/* REVIEW */}
                <button
                  type="button"
                  onClick={() => onReviewClick(index)}
                  className={`col-span-2 px-2 py-3 ${fontSizes.review} text-center cursor-pointer flex items-center justify-center`}
                >
                  {worker.review}
                </button>

                {/* CLOCK OUT (right column with vertical divider) */}
                <button
                  type="button"
                  className={`col-span-3 px-2 py-3 ${fontSizes.clockOut} text-center border-l-2 border-gray-300 hover:text-blue-600 whitespace-nowrap`}
                  onClick={() => {
                    const currentTime = new Date().toLocaleTimeString("en-US", {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                    });
                    onClockOutChange(index, currentTime);
                  }}
                >
                  {worker.clockOut || "00:00"}
                </button>
              </div>

              {/* row separator (skip after last) */}
              {index < workers.length - 1 && (
                <div className="h-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClockOutView;
