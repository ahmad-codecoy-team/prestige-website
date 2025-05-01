import React, { useState } from "react";
import ScheduledShifts from "./ScheduledShifts";
import CompletedShifts from "./CompletedShifts";
import AvailableShifts from "./AvailableShifts";

function Index() {
  const [activeTab, setActiveTab] = useState("available");

  return (
    <>
      <div className="text-xs md:text-lg text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex">
          {["available", "scheduled", "completed"].map((tab) => (
            <li key={tab} className="flex-1">
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full text-center font-bold py-4 rounded-t-lg border-b-2 ${
                  activeTab === tab
                    ? "text-[#000000] border-[#000000]"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
              >
                {tab === "available"
                  ? "Available Shifts"
                  : tab === "scheduled"
                  ? "Scheduled Shifts"
                  : "Completed Shifts"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        {activeTab === "available" && <AvailableShifts />}
        {activeTab === "scheduled" && <ScheduledShifts />}
        {activeTab === "completed" && <CompletedShifts />}
      </div>
    </>
  );
}

export default Index;
