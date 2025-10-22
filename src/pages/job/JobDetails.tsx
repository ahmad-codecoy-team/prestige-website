// src/pages/job/JobDetails.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BidHeader from "@/components/bid/BidHeader";
import JobDetailsCard from "@/components/job/JobDetailsCard";
import JobActionBar from "@/components/job/JobActionBar";
import { JOB_DETAILS_MOCK } from "@/constants/jobDetailsMock";
import { handleApiCall } from "@/helper/call_api_helper";
import { getScheduleDetails } from "@/helper/backend_helper";

export default function JobDetailsPage() {
  const location = useLocation();
  const shift = location.state?.shift;
  const isLead = shift?.isLead || false;

  useEffect(() => {
    const fetchData = async () => {
      await handleApiCall(
        () => getScheduleDetails(shift?.shift?.id),
        "",
        (_response: any) => {
          // Future: hook up API data here
          // console.log("Schedule details:", response);
        }
      );
    };
    if (shift?.shift?.id) fetchData();
  }, [shift]);

  // Use mock job details for now
  const mockData = {
    ...JOB_DETAILS_MOCK,
    position: shift?.position || JOB_DETAILS_MOCK.position,
    rateType: shift?.rateType || JOB_DETAILS_MOCK.rateType,
    bid: shift?.desiredRate || JOB_DETAILS_MOCK.bid,
    perDiem: shift?.diemCost || JOB_DETAILS_MOCK.perDiem,
    reminderNotes: shift?.reminderNotes || JOB_DETAILS_MOCK.reminderNotes,
    shiftNote: shift?.shiftNote || JOB_DETAILS_MOCK.shiftNote,
    dateISO: shift?.startDate || JOB_DETAILS_MOCK.dateISO,
    callTimeStart: shift?.startTime || JOB_DETAILS_MOCK.callTimeStart,
    callTimeEnd: shift?.endTime || JOB_DETAILS_MOCK.callTimeEnd,
    pointOfContact: shift?.pointOfContact || "N/A",
  };

  const callLeadOrPOC = () => {
    if (isLead) {
      // Call POC - replace with actual POC phone number
      window.location.href = 'tel:+1234567890';
      console.log("Calling POC...");
    } else {
      // Call Lead - replace with actual Lead phone number
      window.location.href = 'tel:+0987654321';
      console.log("Calling Lead...");
    }
  };

  const callOffice = () => {
    // Call Office - replace with actual office number
    window.location.href = 'tel:+1555123456';
  };

  return (
    <div className="relative min-h-screen bg-[#FCC40B]">
      {/* Animated Header */}
      <BidHeader
        title={JOB_DETAILS_MOCK.eventName}
        location={shift?.city || JOB_DETAILS_MOCK.location}
        onBack={() => window.history.back()}
      />

      {/* Main Content */}
      <main className="pt-4 pb-40 w-full px-4 sm:px-6 lg:px-8">
        <JobDetailsCard
          data={mockData}
          isLead={isLead}
          onCallLead={callLeadOrPOC}
        />
      </main>

      {/* Fixed bottom bar */}
      <JobActionBar
        isLead={isLead}
        onCallOffice={callOffice}
        signInTo="/attendance"
        signInState={{ isLead }}
      />
    </div>
  );
}
