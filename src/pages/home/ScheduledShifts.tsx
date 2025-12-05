import Card from "@/components/job/JobCard";
import Loading from "@/components/LoadingSpinner";
import { useScheduledShifts } from "@/hooks";

function ScheduledShifts() {
  // ✅ React Query hook
  const { data: shifts = [], isLoading } = useScheduledShifts();

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Loading key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {shifts.map((shift) => (
        <Card
          key={shift.id}
          shift={shift}
          link={`/home/schedule/${shift.id}`}
          variant="scheduled"
        />
      ))}
    </div>
  );
}

export default ScheduledShifts;
