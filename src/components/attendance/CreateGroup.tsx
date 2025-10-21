// src/components/attendance/CreateGroup.tsx
import { X, Check } from "lucide-react";
import { useState } from "react";

interface Worker {
  name: string;
  review: number;
  clockIn?: string;
  clockOut?: string;
  mealBreak?: string;
}

interface CreateGroupProps {
  workers: Worker[];
  onClose: () => void;
}

const CreateGroup = ({ workers, onClose }: CreateGroupProps) => {
  const [groupName, setGroupName] = useState("");
  const [selectedWorkers, setSelectedWorkers] = useState<boolean[]>(
    new Array(workers.length).fill(false)
  );
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedWorkers(new Array(workers.length).fill(newSelectAll));
  };

  const handleWorkerSelect = (index: number) => {
    const newSelectedWorkers = [...selectedWorkers];
    newSelectedWorkers[index] = !newSelectedWorkers[index];
    setSelectedWorkers(newSelectedWorkers);

    // Update select all based on individual selections
    const allSelected = newSelectedWorkers.every((selected) => selected);
    setSelectAll(allSelected);
  };

  const handleCreateGroup = () => {
    // Handle group creation logic here
    console.log("Creating group:", {
      name: groupName,
      workers: workers.filter((_, index) => selectedWorkers[index]),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex flex-col">
      {/* Only the main page's header remains visible behind this modal */}

      {/* Create Group Content - Covers everything except the main header */}
      <div className="flex-1 bg-white mt-16 rounded-t-3xl overflow-hidden flex flex-col">
        {/* Top Handle Bar */}
        <div className="flex justify-center py-3">
          <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          {/* Header with Title and Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Add New Chat Group</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Group Name Input */}
          <div className="mb-8">
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter Group Name"
              className="w-full border-2 border-gray-300 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-black placeholder-gray-500"
            />
          </div>

          {/* Job Section */}
          <div className="mb-6">
            {/* Job Header */}
            <div className="flex items-center justify-between mb-6 py-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSelectAll}
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    selectAll
                      ? "bg-black border-black text-white"
                      : "border-gray-400 text-transparent"
                  }`}
                >
                  <Check size={16} />
                </button>
                <div className="font-semibold text-lg">Strike Technician</div>
              </div>
              <div className="text-lg text-gray-600">08:00</div>
            </div>

            {/* Workers List */}
            <div className="space-y-3">
              {workers.map((worker, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    {/* Profile Picture Placeholder */}
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm">
                        {worker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="font-semibold text-base">{worker.name}</div>
                  </div>
                  <button
                    onClick={() => handleWorkerSelect(index)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                      selectedWorkers[index]
                        ? "bg-black border-black text-white"
                        : "border-gray-400 text-transparent"
                    }`}
                  >
                    <Check size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Create Button - Positioned right after workers */}
          <div className="mt-6">
            <button
              onClick={handleCreateGroup}
              disabled={!groupName.trim()}
              className={`w-full py-4 rounded-full text-lg font-semibold transition-colors ${
                !groupName.trim()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-[#fbbf24] hover:bg-gray-800"
              }`}
            >
              Create Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
