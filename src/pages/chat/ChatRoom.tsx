// src/pages/chat/ChatRoom.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MoreVertical,
  Send,
  Image,
  Users,
  UserPlus,
} from "lucide-react";
import ParticipantsModal from "@/components/chat/ParticipantsModal";
import AddParticipantModal from "@/components/chat/AddParticipantModal";

const ChatRoom = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showParticipantsModal, setShowParticipantsModal] = useState(false);
  const [showAddParticipantModal, setShowAddParticipantModal] = useState(false);
  const [message, setMessage] = useState("");

  // Mock data for the chat room
  const chatData = {
    "1": {
      name: "Strike 2",
      messages: [
        {
          id: "1",
          text: "Start conversation.",
          isSender: false,
          timestamp: "1 hour ago",
        },
      ],
      participants: [], // Added missing participants property
    },
    "2": {
      name: "Strike-group",
      messages: [
        { id: "1", text: "hi", isSender: false, timestamp: "1 hour ago" },
        {
          id: "2",
          text: "hello testing av workforce",
          isSender: true,
          timestamp: "12 seconds ago",
        },
      ],
      participants: [
        { id: "1", name: "muniba anwar" },
        { id: "2", name: "Nimra Razzaq" },
        { id: "3", name: "John Doe" },
      ],
    },
  };

  const currentChat =
    chatData[groupId as keyof typeof chatData] || chatData["2"];

  const participants = currentChat.participants || [];

  // Mock: current user is the lead (first participant)
  const currentUserIsLead = true;

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would send the message to the server
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#fbbf24] flex flex-col">
      {/* Header - Yellow background */}
      <div className="bg-[#fbbf24] text-black px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-black">
              <ArrowLeft size={28} />
            </button>
            {/* Chat logo + Group name */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <img
                  src="/src/assets/logo-white.svg"
                  alt="Chat"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <div className="text-xl font-semibold tracking-wide">
                {currentChat.name}
              </div>
            </div>
          </div>

          {/* Three dots menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black"
            >
              <MoreVertical size={24} />
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                <button
                  onClick={() => {
                    setShowParticipantsModal(true);
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-50 flex items-center gap-3"
                >
                  <Users size={18} className="text-gray-600" />
                  <span className="text-sm font-medium">Participants</span>
                </button>
                {currentUserIsLead && (
                  <button
                    onClick={() => {
                      setShowAddParticipantModal(true);
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-3 text-left text-gray-900 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <UserPlus size={18} className="text-gray-600" />
                    <span className="text-sm font-medium">Add</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close menu when clicking outside */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Chat Room - White background with border radius and shadow */}
      <div className="flex-1 bg-white rounded-t-3xl flex flex-col shadow-lg lg:shadow-2xl lg:mx-4">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentChat.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.isSender ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-3 ${
                  msg.isSender ? "bg-[#fbbf24]" : "bg-gray-100"
                }`}
              >
                <p className="text-gray-900 text-sm">{msg.text}</p>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input - No separator, inside the white room */}
        <div className="p-4">
          <div className="flex items-center gap-2">
            {/* Image upload icon */}
            <button className="text-black p-2">
              <Image size={24} />
            </button>

            {/* Message input field */}
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm"
              />
            </div>

            {/* Send button */}
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="text-black p-2 disabled:opacity-30"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Participants Modal */}
      {/* Participants Bottom Sheet */}
      {showParticipantsModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="w-full max-w-4xl h-[90vh] bg-white rounded-t-3xl animate-slide-up">
            <ParticipantsModal
              groupName={currentChat.name}
              participants={participants}
              onClose={() => setShowParticipantsModal(false)}
              currentUserIsLead={currentUserIsLead}
            />
          </div>
        </div>
      )}

      {/* Add Participant Bottom Sheet - Only show if current user is lead */}
      {showAddParticipantModal && currentUserIsLead && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="w-full max-w-4xl h-[90vh] bg-white rounded-t-3xl animate-slide-up">
            <AddParticipantModal
              onClose={() => setShowAddParticipantModal(false)}
              onAddParticipant={(workerId) => {
                // Handle adding the participant to the group
                console.log("Adding worker to group:", workerId);
                // In a real app, you would update the participants state here
                // and make an API call to add the participant to the group
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
