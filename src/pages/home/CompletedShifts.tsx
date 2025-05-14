import Card from "@/components/job/card";
import Loading from "@/components/loading";
import { getCompletedJobs } from "@/helper/backend_helper";
import { handleApiCall } from "@/helper/call_api_helper";
import moment from "moment";
import React, { useEffect, useState } from "react";

const formatDateRange = (startDate: string, endDate: string) => {
  const start = moment(startDate);
  const end = moment(endDate);

  if (start.isSame(end, "day")) {
    return start.format("MMMM D, YYYY"); // e.g., May 1, 2025
  }

  return `${start.format("MMMM D, YYYY")} - ${end.format("MMMM D, YYYY")}`; // e.g., May 1, 2025 - May 4, 2025
};

function CompletedShifts() {
  const [loading, setLoading] = useState(false);
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem("prestige-website");
      const userId = JSON.parse(user)?.user?.id || 0;
      console.log(JSON.parse(user)?.user?.id);

      setLoading(true);
      await handleApiCall(
        () => getCompletedJobs(userId),
        "",
        (response: any) => {
          setShifts(response.data.data);
        }
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading && [1, 2, 3, 4].map(() => <Loading />)}

      {shifts.map((shift) => (
        <Card
          key={shift.id}
          dateRange={formatDateRange(shift.startDate, shift.endDate)}
          venue={shift.shift?.Event.venue}
          shiftCount={shift.availableShifts}
          link="/invoice"
        />
      ))}
    </div>
  );
}

export default CompletedShifts;
