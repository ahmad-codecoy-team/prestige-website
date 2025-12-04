// src/pages/job/JobDetails.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BidHeader from "@/components/bid/BidHeader";
import JobDetailsCard from "@/components/job/JobDetailsCard";
import JobActionBar from "@/components/job/JobActionBar";
import { JOB_DETAILS_MOCK } from "@/mocks/jobs.mock";
import { jobService } from "@/api/services/job.service";
import { handleApiCall } from "@/utils/apiHandler";

export default function JobDetailsPage() {
  const location = useLocation();
  const shift = location.state?.shift;
  const isLead = shift?.isLead || false;
  const jobId = shift?.shift?.id ?? shift?.id ?? "";

  useEffect(() => {
    const fetchData = async () => {
      await handleApiCall(
        () => jobService.getScheduleDetails(shift?.shift?.id),
        "",
        () => {}
      );
    };
    if (shift?.shift?.id) fetchData();
  }, [shift]);

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
    window.location.href = isLead ? "tel:+1234567890" : "tel:+0987654321";
  };

  const callOffice = () => {
    window.location.href = "tel:+1555123456";
  };

  return (
    <div className="relative min-h-screen bg-[#FCC40B]">
      {/* Header */}
      <BidHeader
        title={JOB_DETAILS_MOCK.eventName}
        location={shift?.city || JOB_DETAILS_MOCK.location}
        onBack={() => window.history.back()}
      />

      {/* Page Content */}
      <main className="w-full pt-4 pb-40">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
          <JobDetailsCard
            data={mockData}
            isLead={isLead}
            onCallLead={callLeadOrPOC}
          />
        </div>
      </main>

      {/* Bottom Action Bar */}
      <JobActionBar
        isLead={isLead}
        onCallOffice={callOffice}
        signInTo={`/home/schedule/${jobId}/attendance/${
          isLead ? "lead" : "worker"
        }`}
        signInState={{ isLead }}
      />
    </div>
  );
}
