import { useState, useEffect } from "react";
import Card from "@/components/job/JobCard";
import Loading from "@/components/loading";
// import { getScheduleJobs } from "@/helper/backend_helper";
// import { handleApiCall } from "@/helper/call_api_helper";
import { SCHEDULED_SHIFTS_MOCK } from "@/constants/scheduledShiftsMock";

function ScheduledShifts() {
  const [loading, setLoading] = useState(false);
  const [shifts, setShifts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Temporary: use mock data instead of API
      // await handleApiCall(
      //   () => getScheduleJobs(),
      //   "",
      //   (response: any) => {
      //     setShifts(response.data.data || []);
      //     console.log("Scheduled shifts data:", response.data.data);
      //   }
      // );

      setShifts(SCHEDULED_SHIFTS_MOCK);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Loading key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {shifts.map((shift) => (
        <Card
          key={shift.id}
          shift={shift}
          link="/job-details"
          variant="scheduled"
        />
      ))}
    </div>
  );
}

export default ScheduledShifts;
