import { Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedWorkerIndex, setSelectedWorkerIndex] = useState<number | null>(
    null
  );
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

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
        mealBreak: "text-xs",
      };
    } else if (isMobile) {
      return {
        header: "text-base",
        name: "text-base",
        button: "text-sm",
        review: "text-sm",
        mealBreak: "text-sm",
      };
    } else {
      return {
        header: "text-lg",
        name: "text-base",
        button: "text-base",
        review: "text-base",
        mealBreak: "text-base",
      };
    }
  };

  const fontSizes = getFontSizes();

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
              Meal Break
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

                {/* MEAL BREAK (right column with vertical divider) */}
                <button
                  type="button"
                  className={`col-span-3 px-2 py-3 ${fontSizes.mealBreak} text-center border-l-2 border-gray-300 hover:text-blue-600 whitespace-nowrap`}
                  onClick={() => handleMealBreakClick(index)}
                >
                  {worker.mealBreak || "N/A"}
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
