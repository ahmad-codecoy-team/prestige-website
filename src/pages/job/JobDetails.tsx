// src/pages/job/JobDetails.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BidHeader from "@/components/bid/BidHeader"; // reuse animated header
import JobDetailsCard from "@/components/job/JobDetailsCard";
import JobActionBar from "@/components/job/JobActionBar";
import { JOB_DETAILS_MOCK } from "@/constants/jobDetailsMock";
import { handleApiCall } from "@/helper/call_api_helper";
import { getScheduleDetails } from "@/helper/backend_helper";

export default function JobDetailsPage() {
  const location = useLocation();
  const { isLead } = location.state || { isLead: false };
  const shift = location.state?.shift;

  // keep your existing data call (non-blocking UI)
  useEffect(() => {
    const fetchData = async () => {
      await handleApiCall(
        () => getScheduleDetails(shift?.shift?.id),
        "",
        (response: any) => {
          // hook up when backend is ready
          // console.log(response);
        }
      );
    };
    if (shift?.shift?.id) fetchData();
  }, [shift]);

  // dynamic header title/venue like in the screenshots
  const headerTitle = JOB_DETAILS_MOCK.venue
    ? `${JOB_DETAILS_MOCK.eventName}\n${JOB_DETAILS_MOCK.venue}`
    : JOB_DETAILS_MOCK.eventName;

  const callLead = () => {
    // same link behavior as your current page
    window.location.href = "tel:5551234567";
  };

  const callOffice = () => {
    window.location.href = "tel:5551234567";
  };

  return (
    <div className="relative min-h-screen bg-[#FCC40B]">
      {/* Reusable animated header (top bar sticky, lower part fades on scroll) */}
      <BidHeader
        title={JOB_DETAILS_MOCK.eventName}
        location={JOB_DETAILS_MOCK.location}
      />

      {/* Content */}
      <main className="pt-4 pb-40">
        <div className="max-w-screen-sm mx-auto px-0">
          <JobDetailsCard
            data={JOB_DETAILS_MOCK}
            isLead={isLead}
            onCallLead={callLead}
          />
        </div>
      </main>

      {/* Bottom fixed action bar */}
      <JobActionBar
        isLead={isLead}
        onCallOffice={callOffice}
        signInTo="/attendance"
        signInState={{ isLead }}
      />
    </div>
  );
}
