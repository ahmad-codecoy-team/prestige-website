import { ChevronLeft, QrCode, Users, Calendar, UserPlus } from "lucide-react";
import { useState } from "react";
import ReviewModal from "@/components/attendance/ReviewModal";
import DefaultView from "@/components/attendance/DefaultView";
import ClockInView from "@/components/attendance/ClockInView";
import ClockOutView from "@/components/attendance/ClockOutView";
import MealBreakView from "@/components/attendance/MealBreakView";

interface Worker {
  name: string;
  review: number;
  clockIn?: string;
  clockOut?: string;
  mealBreak?: string;
}

const LeadAttendance = () => {
  const [activeView, setActiveView] = useState<
    "default" | "clockIn" | "mealBreak" | "clockOut"
  >("default");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedWorkerIndex, setSelectedWorkerIndex] = useState<number | null>(
    null
  );
  const [workers, setWorkers] = useState<Worker[]>([
    { name: "muniba anwar", review: 0 },
    { name: "Nimra Razzaq", review: 0 },
  ]);

  const handleReviewClick = (index: number) => {
    setSelectedWorkerIndex(index);
    setShowReviewModal(true);
  };

  const handleReviewSubmit = (rating: number, comment: string) => {
    if (selectedWorkerIndex !== null) {
      const updatedWorkers = [...workers];
      updatedWorkers[selectedWorkerIndex].review = rating;
      setWorkers(updatedWorkers);
    }
  };

  const handleClockInChange = (index: number, time: string) => {
    const updatedWorkers = [...workers];
    updatedWorkers[index].clockIn = time;
    setWorkers(updatedWorkers);
  };

  const handleClockOutChange = (index: number, time: string) => {
    const updatedWorkers = [...workers];
    updatedWorkers[index].clockOut = time;
    setWorkers(updatedWorkers);
  };

  const handleMealBreakChange = (index: number, breakValue: string) => {
    const updatedWorkers = [...workers];
    updatedWorkers[index].mealBreak = breakValue;
    setWorkers(updatedWorkers);
  };

  const handleScanResult = (result: string) => {
    try {
      const user = JSON.parse(result);
      console.log("Scanned user:", user);
      // Handle scanned user data
    } catch (e) {
      console.error("Invalid QR code data");
    }
  };

  const getButtonStyle = (view: string) => {
    const isActive = activeView === view;
    return `px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? "bg-[#fbbf24] text-black"
        : "bg-white text-black hover:bg-gray-100"
    }`;
  };

  return (
    <>
      {showReviewModal && selectedWorkerIndex !== null && (
        <ReviewModal
          workerName={workers[selectedWorkerIndex].name}
          onClose={() => setShowReviewModal(false)}
          onSubmit={handleReviewSubmit}
        />
      )}

      <div className="min-h-screen bg-[#fbbf24] flex flex-col">
        {/* Header */}
        <div className="bg-black text-white px-4 pt-4 pb-6">
          {/* Top Navigation Bar */}
          <div className="flex justify-between items-center mb-6">
            <ChevronLeft className="cursor-pointer" size={28} />
            <div className="text-center text-xl font-semibold tracking-wide">
              SIGN IN
            </div>
            <div className="flex gap-4">
              <QrCode className="cursor-pointer" size={28} />
              <Users className="cursor-pointer" size={28} />
            </div>
          </div>

          {/* Date */}
          <div className="text-center text-base mb-4">October 14, 2025</div>

          {/* View Selection Buttons */}
          <div className="flex justify-center gap-3">
            <button
              className={getButtonStyle("clockIn")}
              onClick={() => setActiveView("clockIn")}
            >
              Clock In
            </button>
            <button
              className={getButtonStyle("mealBreak")}
              onClick={() => setActiveView("mealBreak")}
            >
              Meal Break
            </button>
            <button
              className={getButtonStyle("clockOut")}
              onClick={() => setActiveView("clockOut")}
            >
              Clock Out
            </button>
          </div>
        </div>

        {/* Content Area - Conditionally Rendered Views */}
        {activeView === "default" && (
          <DefaultView workers={workers} onReviewClick={handleReviewClick} />
        )}

        {activeView === "clockIn" && (
          <ClockInView
            workers={workers}
            onReviewClick={handleReviewClick}
            onClockInChange={handleClockInChange}
            onScanResult={handleScanResult}
          />
        )}

        {activeView === "mealBreak" && (
          <MealBreakView
            workers={workers}
            onReviewClick={handleReviewClick}
            onMealBreakChange={handleMealBreakChange}
          />
        )}

        {activeView === "clockOut" && (
          <ClockOutView
            workers={workers}
            onReviewClick={handleReviewClick}
            onClockOutChange={handleClockOutChange}
            onScanResult={handleScanResult}
          />
        )}

        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white py-6 flex justify-center gap-4 px-4">
          <button className="bg-black text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 text-base font-medium">
            <Calendar size={20} />
            Attendance
          </button>
          <button className="bg-black text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 text-base font-medium">
            <UserPlus size={20} />
            Add Contractor
          </button>
        </div>
      </div>
    </>
  );
};

export default LeadAttendance;
