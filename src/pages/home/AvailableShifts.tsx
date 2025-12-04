import { useEffect, useState } from "react";
import Card from "@/components/job/JobCard";
import Loading from "@/components/LoadingSpinner";
import { dummyShifts } from "@/mocks/shifts.mock";
import { jobService } from "@/api/services";

import type { AvailableShifts } from "@/types";
import { handleApiCall } from "@/utils/apiHandler";

function AvailableShiftsPage() {
  const [loading, setLoading] = useState(false);
  const [shifts, setShifts] = useState<AvailableShifts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await handleApiCall(
        () => jobService.getAvailableJobs(),
        "",
        (response: { data?: { data?: AvailableShifts[] } }) => {
          const data = response?.data?.data || [];
          if (data.length === 0) {
            console.warn("No available shifts found — showing dummy data.");
            setShifts(dummyShifts);
          } else {
            setShifts(data);
          }
        }
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
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
