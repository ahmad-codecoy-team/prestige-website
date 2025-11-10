//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

import ChatGroupCard from "@/components/chat/ChatGroupCard";
import PageLayout from "@/components/layout/PageLayout";

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
  return (
    <PageLayout title="Chat">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6">
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
    </PageLayout>
  );
};

export default ChatPage;
