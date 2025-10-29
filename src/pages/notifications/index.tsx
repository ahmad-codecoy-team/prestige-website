import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NotificationItem {
  id: number;
  title: string;
  body: string;
  unread?: boolean;
}

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    title: "Invoice received",
    body:
      "Please review the invoice from completed shifts tab and approve or request changes",
    unread: false,
  },
  {
    id: 2,
    title: "Invoice received",
    body:
      "Please review the invoice from completed shifts tab and approve or request changes",
    unread: true,
  },
  {
    id: 3,
    title: "Job AACCT-2025-489",
    body:
      "You are booked! You can find the shift information in your “Scheduled Shifts” tab. If you have any questions please feel free to chat us through our “Live Chat” feature",
    unread: false,
  },
  {
    id: 4,
    title: "Invoice received",
    body:
      "Please review the invoice from completed shifts tab and approve or request changes",
    unread: true,
  },
  {
    id: 5,
    title: "Job NYC-327",
    body:
      "You are booked! You can find the shift information in your “Scheduled Shifts” tab. If you have any questions please feel free to chat us through our “Live Chat” feature",
    unread: false,
  },
  {
    id: 6,
    title: "Job AACCT-2025-489",
    body: "Please review the invoice from completed shifts tab",
    unread: true,
  },
  {
    id: 7,
    title: "Invoice received",
    body:
      "Please review the invoice from completed shifts tab and approve or request changes",
    unread: true,
  },
];

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FCC40B]">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-[#FCC40B]">
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <button
            aria-label="Back"
            onClick={() => navigate(-1)}
            className="p-1 -ml-1"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-base font-semibold">Notifications</h1>
          <span className="w-6" />
        </div>
      </header>

      {/* List */}
      <main className="px-4 pb-6 space-y-3 max-w-3xl mx-auto">
        {MOCK_NOTIFICATIONS.map((n) => (
          <div
            key={n.id}
            className="relative bg-white rounded-2xl border border-black/10 shadow-sm p-4 pr-8"
          >
            <h3 className="text-[16px] font-semibold text-black mb-1">
              {n.title}
            </h3>
            <p className="text-[14px] leading-5 text-gray-800">
              {n.body}
            </p>
            {n.unread && (
              <span className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full" />
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Notifications;