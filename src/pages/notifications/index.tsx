import PageLayout from "@/components/layout/PageLayout";

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
  return (
    <PageLayout title="Notifications">
      <div className="px-4 lg:px-6 py-6 space-y-3">
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
      </div>
    </PageLayout>
  );
};

export default Notifications;