// import Card from "@/components/job/JobCard";
// import Loading from "@/components/loading";
// import { getCompletedJobs } from "@/helper/backend_helper";
// import { handleApiCall } from "@/helper/call_api_helper";
// import { useEffect, useState } from "react";

// function CompletedShifts() {
//   const [loading, setLoading] = useState(false);
//   const [shifts, setShifts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const user = localStorage.getItem("prestige-website");
//       const userId = JSON.parse(user || "{}")?.user?.id || 0;

//       setLoading(true);
//       await handleApiCall(
//         () => getCompletedJobs(userId),
//         "",
//         (response: any) => {
//           setShifts(response?.data?.data || []);
//         }
//       );
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
//         {[1, 2, 3, 4].map((i) => (
//           <Loading key={i} />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
//       {shifts.map((shift) => (
//         <Card
//           key={shift.id ?? `${shift?.shiftId}-${shift?.eventId}`}
//           shift={shift}
//           link="/invoice"
//           variant="completed"
//         />
//       ))}
//     </div>
//   );
// }

// export default CompletedShifts;

import Card from "@/components/job/JobCard";
import Loading from "@/components/loading";
// import { getCompletedJobs } from "@/helper/backend_helper";
// import { handleApiCall } from "@/helper/call_api_helper";
import { useEffect, useState } from "react";
import { COMPLETED_SHIFTS_MOCK } from "@/constants/CompletedShiftsMock";

function CompletedShifts() {
  const [loading, setLoading] = useState(false);
  const [shifts, setShifts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // ===== Keep the real API logic here, but commented out for now =====
      // const user = localStorage.getItem("prestige-website");
      // const userId = JSON.parse(user || "{}")?.user?.id || 0;
      // await handleApiCall(
      //   () => getCompletedJobs(userId),
      //   "",
      //   (response: any) => {
      //     setShifts(response?.data?.data || []);
      //   }
      // );

      // Use mock data for testing different statuses
      setShifts(COMPLETED_SHIFTS_MOCK);
      // ================================================================

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
          key={shift.id ?? `${shift?.shiftId}-${shift?.eventId}`}
          shift={shift}
          link="/invoice"
          variant="completed"
        />
      ))}
    </div>
  );
}

export default CompletedShifts;
