////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// src/components/chat/ChatGroupCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ChatGroupCardProps {
  id: string;
  name: string;
  lastMessage: string;
  unreadCount: number;
  timestamp: string;
}

const ChatGroupCard: React.FC<ChatGroupCardProps> = ({
  id,
  name,
  lastMessage,
  unreadCount,
  timestamp,
}) => {
  // Format timestamp to relative time or time string
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <Link to={`/chat/${id}`} className="block">
      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center gap-3">
          {/* Logo with black background and fully rounded */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center">
            <img
              src="/src/assets/logo-white.svg"
              alt={name}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 text-base truncate">
                {name}
              </h3>
              <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                {formatTime(timestamp)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 truncate flex-1">
                {lastMessage}
              </p>

              {unreadCount > 0 && (
                <div className="flex-shrink-0 ml-2">
                  <div className="bg-[#fbbf24] text-black text-xs font-semibold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1">
                    {unreadCount}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatGroupCard;
