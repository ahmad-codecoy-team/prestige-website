import { Phone } from "lucide-react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState, useEffect } from "react";

interface Worker {
  name: string;
  review: number;
  clockIn?: string;
}

interface ClockInViewProps {
  workers: Worker[];
  onReviewClick: (workerIndex: number) => void;
  onClockInChange: (workerIndex: number, time: string) => void;
  onScanResult: (result: string) => void;
}

const ClockInView = ({
  workers,
  onReviewClick,
  onClockInChange,
  onScanResult,
}: ClockInViewProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Camera Scanner - Only on mobile/tablet */}
      {isMobile && (
        <div className="bg-[#fbbf24] px-4 py-4">
          <div className="border-4 border-white rounded-2xl overflow-hidden">
            <Scanner
              onScan={(result) => onScanResult(result[0].rawValue)}
              constraints={{ facingMode: "environment" }}
              styles={{
                container: { width: "100%", height: "300px" },
              }}
            />
          </div>
        </div>
      )}

      {/* Shift Information */}
      <div className="flex justify-between items-center px-4 py-3 text-black bg-[#fbbf24]">
        <div className="font-semibold text-lg">Strike Technician</div>
        <div className="font-semibold text-lg">08:00-19:00</div>
      </div>

      {/* Worker List */}
      <div className="flex-1 bg-[#fbbf24] pb-24">
        <div className="bg-white rounded-2xl border-2 border-gray-300 mx-4 overflow-hidden">
          <div className="grid grid-cols-[1.5fr,1fr,1fr] font-semibold text-lg px-6 py-4 border-b-2 border-gray-300">
            <div>Name</div>
            <div className="text-center">Review</div>
            <div className="text-center">Clock In</div>
          </div>
          {workers.map((worker, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1.5fr,1fr,1fr] items-center px-6 py-4 ${
                index < workers.length - 1 ? "border-b-2 border-gray-300" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" size={24} />
                <span className="text-base">{worker.name}</span>
              </div>
              <div
                className="text-base text-center cursor-pointer"
                onClick={() => onReviewClick(index)}
              >
                {worker.review}
              </div>
              <div
                className="text-base text-center cursor-pointer hover:text-blue-600"
                onClick={() => {
                  // For now, just placeholder. User will build time picker later
                  const currentTime = new Date().toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  onClockInChange(index, currentTime);
                }}
              >
                {worker.clockIn || "00:00"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClockInView;
