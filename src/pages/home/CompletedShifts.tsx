import Card from "@/components/job/JobCard";
import Loading from "@/components/LoadingSpinner";
import { useCompletedShifts } from "@/hooks";
import { useAuth } from "@/hooks/useAuth";

function CompletedShifts() {
  // ✅ Get user ID from auth cache
  const { user } = useAuth();

  const userId = user?.id;

  // ✅ React Query hook
  const { data: shifts = [], isLoading } = useCompletedShifts(userId);

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
          key={shift.id ?? `${shift.shiftId}-${shift.eventId}`}
          shift={shift}
          link={`/home/invoice/${shift.id ?? shift.shiftId ?? shift.eventId}`}
          variant="completed"
        />
      ))}
    </div>
  );
}

export default CompletedShifts;
