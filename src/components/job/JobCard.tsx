import { Link } from "react-router-dom";
import React, { useState } from "react";
import PLS from "@/assets/PLS.png";
import moment from "moment";
import PendingInvoiceModal from "@/components/job/PendingInvoiceModal";

type CardVariant = "available" | "scheduled" | "completed";

interface JobCardProps {
  shift: any;
  link: string;
  variant?: CardVariant;
}

const formatDateRange = (start?: string, end?: string) => {
  const s = start ? moment(start) : null;
  const e = end ? moment(end) : null;
  if (s && e) {
    if (s.isSame(e, "day")) return s.format("M/D");
    return `${s.format("M/D")} - ${e.format("M/D")}`;
  }
  if (s) return s.format("M/D");
  if (e) return e.format("M/D");
  return "";
};

const extractStatusForCompleted = (shift: any): string => {
  let raw =
    shift?.status ??
    shift?.shiftStatus ??
    shift?.shiftPaymentStatus ??
    shift?.contractorInvoiceStatus ??
    shift?.clientInvoiceStatus ??
    "";

  if (typeof raw !== "string") raw = String(raw ?? "");
  const normalized = raw.trim().toLowerCase();

  if (
    ["unsubmitted", "pending", "waiting", "not paid", "bid"].includes(
      normalized
    )
  )
    return "Unsubmitted";
  if (["submitted", "sent"].includes(normalized)) return "Submitted";
  if (["approved", "accept", "accepted"].includes(normalized))
    return "Approved";
  if (["paid", "completed", "settled"].includes(normalized)) return "Paid";

  return "Submitted";
};

const timeRange = (shift: any): string => {
  const start =
    shift?.startTime ||
    shift?.shift?.startTime ||
    shift?.shift?.Event?.startTime ||
    "";
  const end =
    shift?.endTime ||
    shift?.shift?.endTime ||
    shift?.shift?.Event?.endTime ||
    "";
  return start && end ? `${start}-${end}` : start || end || "";
};

const JobCard: React.FC<JobCardProps> = ({
  shift,
  link,
  variant = "available",
}) => {
  const [showModal, setShowModal] = useState(false);

  const event = shift?.shift?.Event;
  const dateRange = formatDateRange(shift?.startDate, shift?.endDate);
  const venue =
    event?.venue || shift?.nameOfVenue || shift?.venue || shift?.city || "";
  const address =
    event?.address || shift?.addressOfVenue || shift?.address || "";
  const location =
    venue && address
      ? `${venue}, ${address}`
      : venue || address || shift?.city || "—";

  const status =
    variant === "completed" ? extractStatusForCompleted(shift) : "";
  const isUnsubmitted = status === "Unsubmitted";
  const statusClasses = isUnsubmitted
    ? "border-red-500 text-red-600"
    : "border-green-500 text-green-600";
  const scheduledTime = variant === "scheduled" ? timeRange(shift) : "";

  const handleClick = (e: React.MouseEvent) => {
    if (variant === "completed" && isUnsubmitted) {
      e.preventDefault(); // prevent navigation
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="relative w-full flex items-center gap-3">
        <div className="flex items-center h-full">
          <img
            src={PLS}
            alt="Prestige logo"
            className="w-10 h-10 object-contain ml-1"
          />
        </div>

        <Link
          to={link}
          state={{ shift }}
          onClick={handleClick}
          className="flex-1 bg-white rounded-xl shadow-md px-4 py-3 border border-gray-200 flex flex-col justify-center"
        >
          <div className="flex justify-between items-center gap-3">
            <p className="font-semibold text-[15px] text-black leading-snug flex-1 break-words">
              {event?.title || shift?.position || "Untitled Event"}
            </p>
            <p className="font-semibold text-[14px] text-black whitespace-nowrap self-center">
              {dateRange}
            </p>
          </div>

          <div className="flex justify-between items-center mt-1 gap-3">
            <p
              className="text-gray-500 text-[12px] flex-1 break-words leading-tight self-center"
              style={{ wordBreak: "break-word" }}
            >
              {location}
            </p>

            {/* Right side content depending on card type */}
            {variant === "available" && shift?.quantity !== undefined && (
              <div className="flex items-center shrink-0 text-[13px] font-medium self-center">
                <span className="text-black mr-1 whitespace-nowrap">
                  Total Shifts:
                </span>
                <span className="w-5 h-5 flex items-center justify-center bg-[#FCC40B] text-black rounded-full text-[13px] font-semibold">
                  {shift.quantity}
                </span>
              </div>
            )}

            {variant === "scheduled" && scheduledTime && (
              <div className="shrink-0 text-[13px] font-semibold self-center whitespace-nowrap">
                {scheduledTime}
              </div>
            )}

            {variant === "completed" && (
              <div
                className={`shrink-0 text-[13px] font-semibold px-3 py-[3px] rounded-xl border ${statusClasses} whitespace-nowrap`}
              >
                {status}
              </div>
            )}
          </div>
        </Link>
      </div>

      {/* Modal Overlay */}
      <PendingInvoiceModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default JobCard;
