import Card from "@/components/job/JobCard";

function WorkHistory() {
  const dummyShifts = [
    {
      id: 1,
      startDate: "2025-05-01",
      endDate: "2025-05-04",
      venue: "Codecoy",
      quantity: 4,
      position: "Worker",
    },
    {
      id: 2,
      startDate: "2025-05-10",
      endDate: "2025-05-12",
      venue: "DevHub",
      quantity: 2,
      position: "Worker",
    },
    {
      id: 3,
      startDate: "2025-05-15",
      endDate: "2025-05-18",
      venue: "TechSquare",
      quantity: 5,
      position: "Worker",
    },
    {
      id: 4,
      startDate: "2025-05-20",
      endDate: "2025-05-22",
      venue: "InnovateX",
      quantity: 3,
      position: "Worker",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dummyShifts.map((shift) => (
        <Card
          key={shift.id}
          shift={shift}
          link={`/job/${shift.id}`}
          variant="completed"
        />
      ))}
    </div>
  );
}

export default WorkHistory;
