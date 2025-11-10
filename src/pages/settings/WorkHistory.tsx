import Card from "@/components/job/JobCard";
import SettingsLayout from "./SettingsLayout";

function WorkHistory() {

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
    <SettingsLayout title="Work History">
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6 space-y-4">
        {dummyShifts.map((shift) => (
          <Card key={shift.id} shift={shift} link={`/home/invoices/${shift.id}`} variant="completed" />
        ))}
      </main>
    </SettingsLayout>
  );
}

export default WorkHistory;
