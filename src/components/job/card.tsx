import React from "react";
import { Link } from "react-router-dom";
import PLS from "@/assets/PLS.png";
import moment from "moment";

interface JobCardProps {
  shift: any;
  link: string;
}

const Card: React.FC<JobCardProps> = ({ shift, link }) => {
  const event = shift?.shift?.Event;
  const start = shift?.startDate ? moment(shift.startDate).format("M/D") : "";
  const end = shift?.endDate ? moment(shift.endDate).format("M/D") : "";
  const dateRange = start && end ? `${start} - ${end}` : "";

  const venue = event?.venue || "";
  const address = event?.address || "";
  const location =
    venue && address ? `${venue}, ${address}` : venue || address || "—";

  return (
    <div className="relative w-full flex items-center gap-3">
      {/* Left P logo (outside card, vertically centered) */}
      <div className="flex items-center h-full">
        <img
          src={PLS}
          alt="Prestige logo"
          className="w-10 h-10 object-contain ml-1"
        />
      </div>

      {/* Card container */}
      <Link
        to={link}
        state={{ shift }}
        className="flex-1 bg-white rounded-xl shadow-md px-4 py-3 border border-gray-200 flex flex-col justify-center"
      >
        {/* === Row 1: Title + Date === */}
        <div className="flex justify-between items-center gap-3">
          <p className="font-semibold text-[15px] text-black leading-snug flex-1 break-words">
            {event?.title || "Untitled Event"}
          </p>
          <p className="font-semibold text-[14px] text-black whitespace-nowrap self-center">
            {dateRange}
          </p>
        </div>

        {/* === Row 2: Address + Shifts === */}
        <div className="flex justify-between items-center mt-1 gap-3">
          <p
            className="text-gray-500 text-[12px] flex-1 break-words leading-tight self-center"
            style={{ wordBreak: "break-word" }}
          >
            {location}
          </p>

          {shift?.quantity !== undefined && (
            <div className="flex items-center shrink-0 text-[13px] font-medium self-center">
              <span className="text-black mr-1 whitespace-nowrap">
                Total Shifts:
              </span>
              <span className="w-5 h-5 flex items-center justify-center bg-[#FCC40B] text-black rounded-full text-[13px] font-semibold">
                {shift.quantity}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
