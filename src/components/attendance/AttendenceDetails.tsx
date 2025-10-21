import { ChevronLeft } from "lucide-react";

interface Worker {
  name: string;
  clockIn?: string;
  clockOut?: string;
  mealBreak?: string;
}

interface AttendanceDetailsViewProps {
  workers: Worker[];
  onBack: () => void;
}

const AttendanceDetails = ({ workers, onBack }: AttendanceDetailsViewProps) => {
  return (
    <div className="min-h-screen bg-[#fbbf24] flex flex-col">
      {/* Header */}
      <div className="bg-[#fbbf24] px-4 pt-4 pb-6">
        <div className="flex items-center mb-6">
          <ChevronLeft
            className="cursor-pointer text-black"
            size={28}
            onClick={onBack}
          />
          <div className="flex-1 text-center text-2xl font-semibold text-black -ml-7">
            Attendance Details
          </div>
        </div>

        {/* Date */}
        <div className="text-right text-base text-black font-medium">
          Date: 10-14-2025
        </div>
      </div>

      {/* Table */}
      <div className="px-2 pb-6">
        <div className="bg-white rounded-2xl border-2 border-black overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-[#d4b896] px-4 py-4 border-b-2 border-black">
            <div className="font-semibold text-base text-black">Name</div>
            <div className="font-semibold text-base text-black text-center">
              Clock In
            </div>
            <div className="font-semibold text-base text-black text-center">
              Meal Break
            </div>
            <div className="font-semibold text-base text-black text-center">
              Clock Out
            </div>
          </div>

          {/* Table Rows */}
          {workers.map((worker, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 px-4 py-4 ${
                index < workers.length - 1 ? "border-b-2 border-gray-300" : ""
              }`}
            >
              <div className="text-base text-black">{worker.name}</div>
              <div className="text-base text-black text-center">
                {worker.clockIn || "00:00"}
              </div>
              <div className="text-base text-black text-center">
                {worker.mealBreak || "N/A"}
              </div>
              <div className="text-base text-black text-center">
                {worker.clockOut || "00:00"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetails;
