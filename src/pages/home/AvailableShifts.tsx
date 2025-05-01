import React from "react";
import Card from "@/components/job/card";

const dummyShifts = [
  {
    id: 1,
    dateRange: "May 1, 2025 - May 4, 2025",
    venue: "Codecoy",
    shiftCount: 4,
  },
  {
    id: 2,
    dateRange: "May 10, 2025 - May 12, 2025",
    venue: "DevHub",
    shiftCount: 2,
  },
  {
    id: 3,
    dateRange: "May 15, 2025 - May 18, 2025",
    venue: "TechSquare",
    shiftCount: 5,
  },
  {
    id: 4,
    dateRange: "May 20, 2025 - May 22, 2025",
    venue: "InnovateX",
    shiftCount: 3,
  },
];

function AvailableShifts() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dummyShifts.map((shift) => (
        <Card
          key={shift.id}
          dateRange={shift.dateRange}
          venue={shift.venue}
          shiftCount={shift.shiftCount}
        />
      ))}
    </div>
  );
}

export default AvailableShifts;
