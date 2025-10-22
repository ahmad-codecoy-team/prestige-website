//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ChatGroupCard from "@/components/chat/ChatGroupCard";

// Mock data for chat groups
const chatGroups = [
  {
    id: "1",
    name: "Strike 2",
    lastMessage: "Start conversation.",
    unreadCount: 0,
    timestamp: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Strike-group",
    lastMessage: "hi",
    unreadCount: 3,
    timestamp: "2024-01-15T09:15:00Z",
  },
  {
    id: "3",
    name: "Production Team",
    lastMessage: "Meeting at 2 PM tomorrow",
    unreadCount: 1,
    timestamp: "2024-01-14T16:45:00Z",
  },
  {
    id: "4",
    name: "Crew Chat",
    lastMessage: "Lunch break in 30 mins",
    unreadCount: 0,
    timestamp: "2024-01-14T12:20:00Z",
  },
];

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fbbf24]">
      {/* Header */}
      <div className="bg-transparent text-white px-4 py-4 sm:px-6">
        <div className="flex items-center justify-center relative">
          <button onClick={() => navigate(-1)} className="absolute left-0">
            <ArrowLeft size={28} />
          </button>
          <div className="text-center text-xl font-semibold tracking-wide">
            Chat
          </div>
        </div>
      </div>

      {/* Chat Groups List with responsive container */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          {chatGroups.map((group) => (
            <ChatGroupCard
              key={group.id}
              id={group.id}
              name={group.name}
              lastMessage={group.lastMessage}
              unreadCount={group.unreadCount}
              timestamp={group.timestamp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
