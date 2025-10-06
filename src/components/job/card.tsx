import React from "react";
import { BsBuilding } from "react-icons/bs";
import PLS from "@/assets/PLS.png";
import { Link } from "react-router-dom";
function Card({ dateRange, venue, shiftCount, link, isLead, shift }: any) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
      <Link to={link} state={{ shift }}>
        <div className="flex items-center gap-3 mb-3">
          <img src={PLS} alt="prestige labour solution" className="w-10 h-10" />
          <p className=" sm:text-lg text-black font-bold">{dateRange}</p>
        </div>
        <div className="flex justify-between ml-1">
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            <BsBuilding /> <p className="text-black font-bold"> Venue: </p>{" "}
            {venue}
          </p>
          {shiftCount && (
            <p className="flex items-center justify-center gap-2 text-sm font-bold">
              Available Shifts :{" "}
              <span className="w-6 h-6 flex items-center justify-center bg-screen text-black rounded-full text-sm font-semibold">
                {shiftCount}
              </span>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Card;
