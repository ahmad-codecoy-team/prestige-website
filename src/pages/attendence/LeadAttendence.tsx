// src/pages/attendance/LeadAttendance.tsx
import { ArrowLeft, QrCode, Users, Calendar, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReviewModal from "@/components/attendance/ReviewModal";
import DefaultView from "@/components/attendance/DefaultView";
import ClockInView from "@/components/attendance/ClockInView";
import ClockOutView from "@/components/attendance/ClockOutView";
import MealBreakView from "@/components/attendance/MealBreakView";
import AttendanceDetails from "@/components/attendance/AttendenceDetails";
import AddContractorModal from "@/components/attendance/AddContractorModal";
import CreateGroup from "@/components/attendance/CreateGroup";
import ResponsiveModal from "@/components/ui/ResponsiveModal";

interface Worker {
  name: string;
  review: number;
  clockIn?: string;
  clockOut?: string;
  mealBreak?: string;
  phone?: string;
}

const LeadAttendance = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<
    "default" | "clockIn" | "mealBreak" | "clockOut" | "attendanceDetails"
  >("default");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showAddContractorModal, setShowAddContractorModal] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [selectedWorkerIndex, setSelectedWorkerIndex] = useState<number | null>(
    null
  );

  const [workers, setWorkers] = useState<Worker[]>([
    { name: "muniba anwar", review: 0, phone: "+1234567890" },
    { name: "Nimra Razzaq", review: 0, phone: "+1234567891" },
    { name: "Muhammad Ahmad", review: 0, phone: "+1234567892" },
    { name: "Hamza Tanveer", review: 0, phone: "+1234567893" },
  ]);

  const handleReviewClick = (index: number) => {
    setSelectedWorkerIndex(index);
    setShowReviewModal(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleReviewSubmit = (rating: number, _comment?: string) => {
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
      // handle scanned user data
      // eslint-disable-next-line
    } catch (e) {
      console.error("Invalid QR code data");
    }
  };

  const handleAddContractor = (contractor: {
    firstName: string;
    lastName: string;
    email: string;
    rate: string;
  }) => {
    const newWorker: Worker = {
      name: `${contractor.firstName} ${contractor.lastName}`,
      review: 0,
    };
    setWorkers([...workers, newWorker]);
  };

  const getButtonStyle = (view: string) => {
    const isActive = activeView === view;
    return `rounded-full font-medium transition-colors ${
      isActive
        ? "bg-[#fbbf24] text-black"
        : "bg-white text-black hover:bg-gray-100"
    }`;
  };

  return (
    <>
      {showReviewModal && selectedWorkerIndex !== null && (
        <ReviewModal
          onClose={() => setShowReviewModal(false)}
          onSubmit={handleReviewSubmit}
        />
      )}

      {showCreateGroup && (
        <CreateGroup
          workers={workers}
          onClose={() => setShowCreateGroup(false)}
        />
      )}

      <div className="min-h-screen bg-[#fbbf24] flex flex-col">
        {/* Header (mobile-friendly sizes) */}
        <div className="fixed top-0 left-0 right-0 lg:left-[80px] bg-black text-white z-50">
          <div className="w-full max-w-[1440px] mx-auto px-3 md:px-4 pt-3 md:pt-4 pb-4 md:pb-6">
          {/* Top Navigation Bar */}
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <ArrowLeft
              className="cursor-pointer"
              size={24}
              onClick={() => navigate(-1)}
            />
            <div className="text-center text-base md:text-xl font-semibold tracking-wide">
              SIGN IN
            </div>
            <div className="flex gap-3 md:gap-4">
              <QrCode
                className="cursor-pointer"
                size={24}
                onClick={() => navigate("/home/lead-qr")}
              />
              <Users
                className="cursor-pointer"
                size={24}
                onClick={() => setShowCreateGroup(true)}
              />
            </div>
          </div>

          {/* Date */}
          <div className="text-center text-sm md:text-base mb-3 md:mb-4">
            October 14, 2025
          </div>

          {/* View Selection Buttons (compact on mobile) */}
          <div className="flex justify-center gap-2 md:gap-3">
            <button
              className={`${getButtonStyle(
                "clockIn"
              )} text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5`}
              onClick={() => setActiveView("clockIn")}
            >
              Clock In
            </button>
            <button
              className={`${getButtonStyle(
                "mealBreak"
              )} text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5`}
              onClick={() => setActiveView("mealBreak")}
            >
              Meal Break
            </button>
            <button
              className={`${getButtonStyle(
                "clockOut"
              )} text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5`}
              onClick={() => setActiveView("clockOut")}
            >
              Clock Out
            </button>
          </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-[1440px] mx-auto pt-40">
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
        </div>

        {/* Fixed Bottom Buttons (compact on mobile) */}
        <div className="fixed bottom-0 left-0 right-0 lg:left-[80px] bg-white z-40">
          <div className="w-full max-w-[1440px] mx-auto py-4 md:py-6 px-3 md:px-6">
            <div className="flex flex-col items-center md:flex-row justify-center gap-3 md:gap-4">
              <button
                onClick={() => setActiveView("attendanceDetails")}
                className="w-full md:max-w-[400px] bg-black text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full flex items-center justify-center gap-2 text-sm md:text-base font-medium"
              >
            <Calendar size={18} className="md:hidden" />
            <Calendar size={20} className="hidden md:inline" />
                Attendance
              </button>
              <button
                onClick={() => setShowAddContractorModal(true)}
                className="w-full md:max-w-[400px] bg-black text-white py-2.5 md:py-3 px-6 md:px-8 rounded-full flex items-center justify-center gap-2 text-sm md:text-base font-medium"
              >
            <UserPlus size={18} className="md:hidden" />
            <UserPlus size={20} className="hidden md:inline" />
                Add Contractor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Details - Full Screen */}
      {activeView === "attendanceDetails" && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <AttendanceDetails
            workers={workers}
            onBack={() => setActiveView("default")}
          />
        </div>
      )}

      {/* Add Contractor: now uses ResponsiveModal (sheet on mobile, centered modal on desktop) */}
      {showAddContractorModal && (
        <ResponsiveModal
          open={showAddContractorModal}
          onClose={() => setShowAddContractorModal(false)}
          ariaLabel="Add contractor"
          backdropClassName="bg-black/50"
          // Add a cardClassName only if you remove the panel wrapper from AddContractorModal itself.
          // cardClassName="bg-white rounded-t-3xl md:rounded-3xl px-4 sm:px-6 pt-6 pb-8"
        >
          <AddContractorModal
            onClose={() => setShowAddContractorModal(false)}
            onSubmit={handleAddContractor}
          />
        </ResponsiveModal>
      )}
    </>
  );
};

export default LeadAttendance;
