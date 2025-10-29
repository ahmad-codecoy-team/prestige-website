import Card from "@/components/job/JobCard";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function WorkHistory() {
  const navigate = useNavigate();

  const dummyShifts = [
    {
      id: 1,
      startDate: "2025-05-01",
      endDate: "2025-05-04",
      venue: "Codecoy",
      quantity: 4,
      position: "Worker",
      status: "Paid",
    },
    {
      id: 2,
      startDate: "2025-05-10",
      endDate: "2025-05-12",
      venue: "DevHub",
      quantity: 2,
      position: "Worker",
      status: "Paid",
    },
    {
      id: 3,
      startDate: "2025-05-15",
      endDate: "2025-05-18",
      venue: "TechSquare",
      quantity: 5,
      position: "Worker",
      status: "Paid",
    },
    {
      id: 4,
      startDate: "2025-05-20",
      endDate: "2025-05-22",
      venue: "InnovateX",
      quantity: 3,
      position: "Worker",
      status: "Paid",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-[#FCC40B]">
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <button aria-label="Back" onClick={() => navigate(-1)} className="p-1 -ml-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-base font-semibold">Work History</h1>
          <span className="w-6" />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 pb-6 space-y-4">
        {dummyShifts.map((shift) => (
          <Card key={shift.id} shift={shift} link={`/job/${shift.id}`} variant="completed" />
        ))}
      </main>
    </div>
  );
}

export default WorkHistory;
