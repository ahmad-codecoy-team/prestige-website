import { ChevronLeft, QrCode, Users, Calendar, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import ReviewModal from "@/components/attendance/ReviewModal";
import DefaultView from "@/components/attendance/DefaultView";
import ClockInView from "@/components/attendance/ClockInView";
import ClockOutView from "@/components/attendance/ClockOutView";
import MealBreakView from "@/components/attendance/MealBreakView";
import AttendanceDetails from "@/components/attendance/AttendenceDetails";
import AddContractorModal from "@/components/attendance/AddContractorModal";
import CreateGroup from "@/components/attendance/CreateGroup";

interface Worker {
  name: string;
  review: number;
  clockIn?: string;
  clockOut?: string;
  mealBreak?: string;
}

const LeadAttendance = () => {
  const navigate = useNavigate(); // Add this
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
    { name: "muniba anwar", review: 0 },
    { name: "Nimra Razzaq", review: 0 },
    { name: "Muhammad Ahmad", review: 0 },
    { name: "Hamza Tanveer", review: 0 },
  ]);

  const handleReviewClick = (index: number) => {
    setSelectedWorkerIndex(index);
    setShowReviewModal(true);
  };

  const handleReviewSubmit = (rating: number, _comment: string) => {
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

      //eslint-disable-next-line
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
    return `px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? "bg-[#fbbf24] text-black"
        : "bg-white text-black hover:bg-gray-100"
    }`;
  };

  // Show Attendance Details view
  if (activeView === "attendanceDetails") {
    return (
      <AttendanceDetails
        workers={workers}
        onBack={() => setActiveView("default")}
      />
    );
  }

  return (
    <>
      {showReviewModal && selectedWorkerIndex !== null && (
        <ReviewModal
          workerName={workers[selectedWorkerIndex].name}
          onClose={() => setShowReviewModal(false)}
          onSubmit={handleReviewSubmit}
        />
      )}

      {showAddContractorModal && (
        <AddContractorModal
          onClose={() => setShowAddContractorModal(false)}
          onSubmit={handleAddContractor}
        />
      )}

      {showCreateGroup && (
        <CreateGroup
          workers={workers}
          onClose={() => setShowCreateGroup(false)}
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
              <QrCode
                className="cursor-pointer"
                size={28}
                onClick={() => navigate("/lead-qr")} // Add this onClick
              />
              <Users
                className="cursor-pointer"
                size={28}
                onClick={() => setShowCreateGroup(true)}
              />
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
          <button
            onClick={() => setActiveView("attendanceDetails")}
            className="bg-black text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 text-base font-medium"
          >
            <Calendar size={20} />
            Attendance
          </button>
          <button
            onClick={() => setShowAddContractorModal(true)}
            className="bg-black text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 text-base font-medium"
          >
            <UserPlus size={20} />
            Add Contractor
          </button>
        </div>
      </div>
    </>
  );
};

export default LeadAttendance;
