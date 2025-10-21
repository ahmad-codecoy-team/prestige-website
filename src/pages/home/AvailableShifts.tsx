import { useEffect, useState } from "react";
import Card from "@/components/job/JobCard";
import Loading from "@/components/loading";
import { handleApiCall } from "@/helper/call_api_helper";
import { getAvailableJobs } from "@/helper/backend_helper";
import { dummyShifts } from "@/constants/dummyShifts";

function AvailableShifts() {
  const [loading, setLoading] = useState(false);
  const [shifts, setShifts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await handleApiCall(
        () => getAvailableJobs(),
        "",
        (response: any) => {
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
        <Card key={shift.id} shift={shift} link="/bid" variant="available" />
      ))}
    </div>
  );
}

export default AvailableShifts;
