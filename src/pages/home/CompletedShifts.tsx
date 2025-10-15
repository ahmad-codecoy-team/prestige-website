import Card from "@/components/job/JobScheduleCard";
import Loading from "@/components/loading";
import { getCompletedJobs } from "@/helper/backend_helper";
import { handleApiCall } from "@/helper/call_api_helper";
import moment from "moment";
import { useEffect, useState } from "react";

const formatDateRange = (startDate: string, endDate: string) => {
  const start = moment(startDate);
  const end = moment(endDate);

  if (start.isSame(end, "day")) {
    return start.format("M/D");
  }
  return `${start.format("M/D")} - ${end.format("M/D")}`;
};

function CompletedShifts() {
  const [loading, setLoading] = useState(false);
  const [shifts, setShifts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem("prestige-website");
      const userId = JSON.parse(user || "{}")?.user?.id || 0;

      setLoading(true);
      await handleApiCall(
        () => getCompletedJobs(userId),
        "",
        (response: any) => {
          console.log(response);
          setShifts(response.data.data || []);
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

  // return (
  //   <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
  //     {shifts.map((shift) => (
  //       <Card
  //         key={shift.id}
  //         dateRange={formatDateRange(shift.startDate, shift.endDate)}
  //         venue={shift.shift?.Event?.venue}
  //         shiftCount={shift.availableShifts}
  //         link="/invoice"
  //       />
  //     ))}
  //   </div>
  // );

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {shifts.map((shift) => (
        <Card key={shift.id} shift={shift} link="/invoice" />
      ))}
    </div>
  );
}

export default CompletedShifts;
