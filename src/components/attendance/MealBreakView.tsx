import { Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Worker {
  name: string;
  review: number;
  mealBreak?: string;
}

interface MealBreakViewProps {
  workers: Worker[];
  onReviewClick: (workerIndex: number) => void;
  onMealBreakChange: (workerIndex: number, breakValue: string) => void;
}

const mealBreakOptions = [
  "30 Min",
  "1 Hr",
  "(2)1 Hr",
  "No Break",
  "MP",
  "1Hr + MP",
];

const MealBreakView = ({
  workers,
  onReviewClick,
  onMealBreakChange,
}: MealBreakViewProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkerIndex, setSelectedWorkerIndex] = useState<number | null>(
    null
  );
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMealBreakClick = (index: number) => {
    setSelectedWorkerIndex(index);
    setSelectedOption(workers[index].mealBreak || "30 Min");
    setShowModal(true);
  };

  const handleSave = () => {
    if (selectedWorkerIndex !== null) {
      onMealBreakChange(selectedWorkerIndex, selectedOption);
    }
    setShowModal(false);
    setShowDropdown(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setShowDropdown(false);
  };

  return (
    <>
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
            <div className="text-center">Meal Break</div>
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
                onClick={() => handleMealBreakClick(index)}
              >
                {worker.mealBreak || "N/A"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Break Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-3xl w-[90%] max-w-md p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Select option
            </h2>

            <div className="mb-6">
              <label className="text-sm text-gray-600 mb-2 block">Choice</label>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full border-2 border-purple-600 rounded-xl px-4 py-3 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-base">{selectedOption}</span>
                  <ChevronDown size={20} />
                </button>

                {/* Dropdown Options */}
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                    {mealBreakOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedOption(option);
                          setShowDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleCancel}
                className="flex-1 border-2 border-black text-black py-3 rounded-full text-lg font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-black text-[#fbbf24] py-3 rounded-full text-lg font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MealBreakView;
