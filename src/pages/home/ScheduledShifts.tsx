// import Card from "@/components/job/card";
// import Loading from "@/components/loading";
// import { getScheduleJobs } from "@/helper/backend_helper";
// import { handleApiCall } from "@/helper/call_api_helper";
// import moment from "moment";
// import { useEffect, useState } from "react";

// const formatDateRange = (startDate: string, endDate: string) => {
//   const start = moment(startDate);
//   const end = moment(endDate);

//   if (start.isSame(end, "day")) {
//     return start.format("MMMM D, YYYY"); // e.g., May 1, 2025
//   }

//   return `${start.format("MMMM D, YYYY")} - ${end.format("MMMM D, YYYY")}`; // e.g., May 1, 2025 - May 4, 2025
// };

// function ScheduledShifts() {
//   const [loading, setLoading] = useState(false);
//   const [shifts, setShifts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       await handleApiCall(
//         () => getScheduleJobs(),
//         "",
//         (response: any) => {
//           setShifts(response.data.data);
//         }
//       );
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
//       {loading && [1, 2, 3, 4].map(() => <Loading />)}

//       {shifts.map((shift) => {
//         return (
//           <Card
//             key={shift.id}
//             dateRange={formatDateRange(
//               shift?.shift?.startDate,
//               shift?.shift?.endDate
//             )}
//             venue={shift.shift?.Event.venue}
//             shiftCount={shift.availableShifts}
//             link={`/job-details`}
//             isLead={shift.isLead}
//             shift={shift}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default ScheduledShifts;

import Card from "@/components/job/card";
import Loading from "@/components/loading";
import { getScheduleJobs } from "@/helper/backend_helper";
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

function ScheduledShifts() {
  const [loading, setLoading] = useState(false);
  const [shifts, setShifts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await handleApiCall(
        () => getScheduleJobs(),
        "",
        (response: any) => {
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

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {shifts.map((shift) => (
        <Card
          key={shift.id}
          dateRange={formatDateRange(
            shift?.shift?.startDate,
            shift?.shift?.endDate
          )}
          venue={shift.shift?.Event?.venue}
          shiftCount={shift.availableShifts}
          link={`/job-details`}
          isLead={shift.isLead}
          shift={shift}
        />
      ))}
    </div>
  );
}

export default ScheduledShifts;
