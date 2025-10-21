// src/components/chat/ParticipantsModal.tsx
import React from "react";
import { X, User, Trash2 } from "lucide-react";

interface Participant {
  id: string;
  name: string;
  isLead?: boolean;
  canDelete?: boolean;
}

interface ParticipantsModalProps {
  groupName: string;
  participants: Participant[];
  onClose: () => void;
  currentUserIsLead?: boolean;
}

const ParticipantsModal: React.FC<ParticipantsModalProps> = ({
  groupName,
  participants,
  onClose,
  currentUserIsLead = true, // Mock data - in real app, this would come from props
}) => {
  const handleDeleteParticipant = (participantId: string) => {
    // In a real app, this would call an API to remove the participant
    console.log("Delete participant:", participantId);
    // Remove from participants array
  };

  // Mock data with lead information
  const participantsWithLead = participants.map((participant, index) => ({
    ...participant,
    isLead: index === 0, // First participant is the lead
    canDelete: currentUserIsLead && index !== 0, // Lead can delete others but not themselves
  }));

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex flex-col">
      {/* Only the main page's header remains visible behind this modal */}

      {/* Modal Content - Covers everything except the main header */}
      <div className="flex-1 bg-white mt-16 rounded-t-3xl overflow-hidden flex flex-col">
        {/* Top Handle Bar */}
        <div className="flex justify-center py-3">
          <div className="w-12 h-1 bg-gray-900 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          {/* Header with Title and Close Button */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Participant</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Participants List */}
          <div className="space-y-3">
            {participantsWithLead.map((participant) => (
              <div
                key={participant.id}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1">
                  {/* User Icon */}
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User size={20} className="text-gray-600" />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-base">
                      {participant.name}
                    </div>
                    {participant.isLead && (
                      <div className="text-xs text-gray-500 mt-1">
                        Group Lead
                      </div>
                    )}
                  </div>
                </div>

                {/* Delete Button - Only show if current user is lead and this is not the lead */}
                {participant.canDelete && (
                  <button
                    onClick={() => handleDeleteParticipant(participant.id)}
                    className="text-red-500 hover:text-red-700 p-2 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsModal;
