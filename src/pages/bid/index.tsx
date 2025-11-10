// src/pages/bid/index.tsx
import { useMemo, useState } from "react";
import BidHeader from "@/components/bid/BidHeader";
import JobBidCard from "@/components/job/JobBidCard";
import { BID_HEADER, MOCK_SHIFTS } from "@/constants/bidMocks";
import { useNavigate } from "react-router-dom";

export default function BidPage() {
  const nav = useNavigate();
  const [bids, setBids] = useState<Record<string, string>>(
    () => Object.fromEntries(MOCK_SHIFTS.map((s) => [s.id, ""]))
  );

  const sortedShifts = useMemo(
    () => [...MOCK_SHIFTS].sort((a, b) => +new Date(a.dateISO) - +new Date(b.dateISO)),
    []
  );

  const hasAnyBid = Object.values(bids).some((v) => v.trim());

  return (
    <div className="min-h-screen bg-[#FCC40B]">
      <BidHeader
        title={BID_HEADER.title}
        location={BID_HEADER.location}
        onBack={() => nav(-1)}
      />

      <main className="w-full pt-4 pb-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
          {sortedShifts.map((shift) => (
            <JobBidCard
              key={shift.id}
              shift={shift}
              bidValue={bids[shift.id]}
              onChange={(v) => setBids({ ...bids, [shift.id]: v })}
            />
          ))}

          {hasAnyBid && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => console.log(bids)}
                className="w-full max-w-[400px] h-11 bg-black text-[#FCC40B] rounded-full font-semibold"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
