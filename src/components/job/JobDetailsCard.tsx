// import { Link } from "react-router-dom";
// import { MessageSquareText } from "lucide-react"; // closest match to screenshot
// import { JobDetailsData } from "@/constants/jobDetailsMock";

// type Props = {
//   data: JobDetailsData;
//   isLead?: boolean;
//   onCallLead?: () => void;
// };

// const formatHumanDate = (iso: string) =>
//   new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "2-digit",
//   }).format(new Date(iso));

// export default function JobDetailsCard({ data, isLead, onCallLead }: Props) {
//   return (
//     <section className="w-full max-w-screen-sm mx-auto">
//       {/* Yellow date bar */}
//       <div className="bg-[#FCC40B] text-black px-4 py-2 text-sm font-semibold flex items-center justify-between">
//         <span>Date:</span>
//         <span>{formatHumanDate(data.dateISO)}</span>
//       </div>

//       {/* Card */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-400 mx-2 mb-4 overflow-hidden">
//         {/* Card header row */}
//         <div className="px-4 py-3 flex items-center justify-between">
//           <span className="font-semibold text-[15px]">You are a Worker</span>
//           <Link
//             to="/chat"
//             aria-label="Open chat"
//             className="active:scale-95 transition"
//           >
//             <MessageSquareText className="w-6 h-6 text-gray-700" />
//           </Link>
//         </div>

//         <div className="px-4 divide-y divide-gray-200 text-[15px]">
//           <Row label="Position:" value={data.position} />
//           <Row
//             label="Call Time:"
//             value={`${data.callTimeStart} - ${data.callTimeEnd}`}
//           />
//           <Row label="Rate Type:" value={data.rateType} />
//           <Row label="Bid:" value={`$${data.bid.toFixed(0)}`} />
//           <Row label="Per Diem:" value={`$${data.perDiem.toFixed(0)}`} />
//           <Row label="Reminder Notes:" value={data.reminderNotes || ""} />
//           <Row label="Shift Note:" value={data.shiftNote || ""} />
//         </div>

//         {/* In-card primary button */}
//         {!isLead && (
//           <div className="px-4 pb-4 pt-3">
//             <button
//               onClick={onCallLead}
//               className="w-full h-12 rounded-[28px] bg-black text-[#FCC40B] font-semibold active:scale-[0.98] transition"
//             >
//               Call Lead
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function Row({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-center justify-between py-3">
//       <span className="font-semibold">{label}</span>
//       <span className="text-gray-900">{value}</span>
//     </div>
//   );
// }

// src/components/job/JobDetailsCard.tsx
import { Link } from "react-router-dom";
import { MessageSquareText } from "lucide-react";
import { JobDetailsData } from "@/constants/jobDetailsMock";

type Props = {
  data: JobDetailsData;
  isLead?: boolean;
  onCallLead?: () => void;
};

const formatHumanDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(iso));

export default function JobDetailsCard({ data, isLead, onCallLead }: Props) {
  return (
    <section className="w-full max-w-screen-sm mx-auto">
      {/* Yellow date bar */}
      <div className="bg-[#FCC40B] text-black px-4 py-2 text-sm font-semibold flex items-center justify-between">
        <span>Date:</span>
        <span>{formatHumanDate(data.dateISO)}</span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-400 mx-2 mb-4 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="font-semibold text-[15px]">
            {isLead ? "You are the Shift Lead" : "You are a Worker"}
          </span>
          <Link
            to="/chat"
            aria-label="Open chat"
            className="active:scale-95 transition"
          >
            <MessageSquareText className="w-6 h-6 text-gray-700" />
          </Link>
        </div>

        <div className="px-4 divide-y divide-gray-200 text-[15px]">
          <Row label="Position:" value={data.position} />
          <Row
            label="Call Time:"
            value={`${data.callTimeStart} - ${data.callTimeEnd}`}
          />
          <Row label="Rate Type:" value={data.rateType} />
          <Row label="Bid:" value={`$${data.bid.toFixed(0)}`} />
          <Row label="Per Diem:" value={`$${data.perDiem.toFixed(0)}`} />
          <Row label="Reminder Notes:" value={data.reminderNotes || ""} />
          <Row label="Shift Note:" value={data.shiftNote || ""} />
          {isLead && (
            <Row
              label="Point of Contact:"
              value={data?.pointOfContact || "N/A"}
            />
          )}
        </div>

        {/* In-card button */}
        <div className="px-4 pb-4 pt-3">
          <button
            onClick={onCallLead}
            className="w-full h-12 rounded-[28px] bg-black text-[#FCC40B] font-semibold active:scale-[0.98] transition"
          >
            {isLead ? "Call POC" : "Call Lead"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="font-semibold">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}
