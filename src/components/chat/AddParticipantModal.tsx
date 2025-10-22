// src/components/chat/AddParticipantModal.tsx
import React, { useState } from "react";
import { X, User, UserPlus } from "lucide-react";

interface Worker {
  id: string;
  name: string;
}

interface AddParticipantModalProps {
  onClose: () => void;
  onAddParticipant?: (workerId: string) => void;
}

const AddParticipantModal: React.FC<AddParticipantModalProps> = ({
  onClose,
  onAddParticipant,
}) => {
  // Mock data for available workers who are not in the group
  const [availableWorkers, setAvailableWorkers] = useState<Worker[]>([
    { id: "4", name: "John Smith" },
    { id: "5", name: "Sarah Johnson" },
    { id: "6", name: "Mike Wilson" },
    { id: "7", name: "Emily Brown" },
    { id: "8", name: "David Lee" },
  ]);

  const handleAddParticipant = (workerId: string) => {
    // In a real app, this would call an API to add the participant to the group
    console.log("Add participant:", workerId);

    // Call the callback if provided
    if (onAddParticipant) {
      onAddParticipant(workerId);
    }

    // Remove from available workers (simulate adding to group)
    setAvailableWorkers((prev) =>
      prev.filter((worker) => worker.id !== workerId)
    );

    // Show success message or close modal after adding
    // You can remove this if you want to keep the modal open for multiple additions
    // onClose();
  };

  return (
    <div className="h-full flex flex-col">
      {/* Top Handle Bar */}
      <div className="flex justify-center py-3">
        <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-4">
          {/* Header with Title and Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Add Chat Participant</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Available Workers List */}
          <div className="space-y-3">
            {availableWorkers.length > 0 ? (
              availableWorkers.map((worker) => (
                <div
                  key={worker.id}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {/* User Icon */}
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User size={20} className="text-gray-600" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-base">
                        {worker.name}
                      </div>
                    </div>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddParticipant(worker.id)}
                    className="text-green-600 hover:text-green-700 p-2 transition-colors"
                  >
                    <UserPlus size={18} />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={24} className="text-gray-500" />
                </div>
                <p className="text-gray-600 text-lg">
                  No available workers to add
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AddParticipantModal;
