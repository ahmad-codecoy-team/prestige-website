// src/pages/bid/index.tsx
import { useMemo, useState } from "react";
import BidHeader from "@/components/bid/BidHeader";
import JobBidCard from "@/components/job/JobBidCard";
import { BID_HEADER, MOCK_SHIFTS } from "@/constants/bidMocks";
import { useNavigate } from "react-router-dom";

export default function BidPage() {
  const nav = useNavigate();
  const [bids, setBids] = useState<Record<string, string>>(
    () =>
      Object.fromEntries(MOCK_SHIFTS.map((s) => [s.id, ""])) as Record<
        string,
        string
      >
  );

  // const headerHeight = 260;

  const sortedShifts = useMemo(
    () =>
      [...MOCK_SHIFTS].sort(
        (a, b) => +new Date(a.dateISO) - +new Date(b.dateISO)
      ),
    []
  );

  const handleChange = (id: string, val: string) =>
    setBids((prev) => ({ ...prev, [id]: val }));

  const handleSubmit = () => {
    const filtered = Object.entries(bids).filter(([_, val]) => val.trim());
    console.log(
      "Submitted Bids:",
      filtered.map(([id, val]) => ({ shiftId: id, bid: val }))
    );
  };

  const hasAnyBid = Object.values(bids).some((v) => v.trim() !== "");

  return (
    <div className="relative min-h-screen bg-[#FCC40B]">
      {/* Sticky header */}
      <BidHeader
        title={BID_HEADER.title}
        location={BID_HEADER.location}
        onBack={() => nav(-1)}
      />

      {/* Scrollable content */}
      <main className="pt-4 pb-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {sortedShifts.map((shift) => (
            <JobBidCard
              key={shift.id}
              shift={shift}
              bidValue={bids[shift.id] || ""}
              onChange={(v) => handleChange(shift.id, v)}
            />
          ))}
        </div>

        {/* Submit button only if user entered a bid */}
        {hasAnyBid && (
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="w-full h-11 rounded-full bg-black text-[#FCC40B] font-semibold active:scale-[0.98] transition"
            >
              Submit
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
