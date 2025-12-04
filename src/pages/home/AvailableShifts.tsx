import Card from "@/components/job/JobCard";
import Loading from "@/components/LoadingSpinner";

import { useAvailableShifts } from "@/hooks/useAvailableShifts";

function AvailableShiftsPage() {
  const { data: shifts = [], isLoading } = useAvailableShifts();

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
          link={`/home/bid/${shift.id}`}
          variant="available"
        />
      ))}
    </div>
  );
}

export default AvailableShiftsPage;
