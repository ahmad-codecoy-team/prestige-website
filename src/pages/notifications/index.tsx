// src/pages/notifications/Notifications.tsx
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

interface NotificationItem {
  id: number | string; // used to build /home/invoice/:id
  title: string;
  body: string;
  unread?: boolean;
}

// Updated sample data: ids map to invoice detail routes
const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "INV-2025-1001",
    title: "Invoice received",
    body:
      "Please review the invoice in Completed Shifts and approve or request changes.",
    unread: false,
  },
  {
    id: "INV-2025-1002",
    title: "Invoice received",
    body:
      "Please review the invoice in Completed Shifts and approve or request changes.",
    unread: true,
  },
  {
    id: "JOB-AACCT-489",
    title: "Job AACCT-2025-489",
    body:
      "You are booked! Check details in “Scheduled Shifts”. For questions, use our Live Chat.",
    unread: false,
  },
  {
    id: "INV-2025-1003",
    title: "Invoice received",
    body:
      "Please review the invoice in Completed Shifts and approve or request changes.",
    unread: true,
  },
  {
    id: "JOB-NYC-327",
    title: "Job NYC-327",
    body:
      "You are booked! Check details in “Scheduled Shifts”. For questions, use our Live Chat.",
    unread: false,
  },
  {
    id: "INV-2025-1004",
    title: "Invoice received",
    body: "Please review the invoice from Completed Shifts tab.",
    unread: true,
  },
  {
    id: "INV-2025-1005",
    title: "Invoice received",
    body:
      "Please review the invoice in Completed Shifts and approve or request changes.",
    unread: true,
  },
];

const Notifications = () => {
  return (
    <PageLayout title="Notifications">
      {/* Match CompletedShifts layout so cards don't stretch on large screens */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {MOCK_NOTIFICATIONS.map((n) => (
            <Link
              key={n.id}
              to={`/home/invoice/${encodeURIComponent(String(n.id))}`}
              className="group relative"
            >
              <div
                className="
                  relative bg-white rounded-2xl border border-black/10
                  shadow-sm p-4 pr-10 transition
                  group-hover:shadow-md group-hover:border-black/20
                "
              >
                <h3 className="text-[15px] md:text-[16px] font-semibold text-black mb-1">
                  {n.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-5 text-gray-800">
                  {n.body}
                </p>

                {/* Unread dot */}
                {n.unread && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-black rounded-full" />
                )}

                {/* Click affordance (subtle chevron) */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none absolute right-3 top-3 text-gray-400
                    group-hover:text-gray-700 transition
                  "
                >
                  ›
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Notifications;
