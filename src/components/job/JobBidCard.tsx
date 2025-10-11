import { useState } from "react";
import { ShiftBid } from "@/constants/bidMocks";

type Props = {
  shift: ShiftBid;
  bidValue: string;
  onChange: (val: string) => void;
};

const formatHumanDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(iso));

export default function JobBidCard({ shift, bidValue, onChange }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <section className="w-full max-w-screen-sm mx-auto">
      {/* Yellow date bar */}
      <div className="bg-[#FCC40B] text-black px-4 py-2 text-sm font-semibold flex items-center justify-between">
        <span>Date:</span>
        <span>{formatHumanDate(shift.dateISO)}</span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-400 mx-2 mb-4">
        <div className="px-4 py-3 divide-y divide-gray-200 text-[15px]">
          <Row label="Position:" value={shift.position} />
          <Row
            label="Call Time:"
            value={`${shift.callTimeStart} - ${shift.callTimeEnd}`}
          />
          <Row label="Rate Type:" value={shift.rateType} />
          <Row
            label="Desired Rate :"
            value={`$${shift.desiredRate.toFixed(0)}`}
          />

          {/* Bid input */}
          <div className="flex items-center justify-between py-3">
            <span className="font-semibold">Bid:</span>
            <div className="relative">
              {focused && (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black font-semibold select-none">
                  $
                </span>
              )}
              <input
                type="number"
                inputMode="decimal"
                pattern="[0-9]*"
                value={bidValue}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`${
                  focused ? "pl-5" : "pl-2"
                } pr-2 py-1 w-20 rounded-md border border-gray-400 bg-gray-100 outline-none focus:ring-0 text-black`}
              />
            </div>
          </div>

          <Row label="Per Diem:" value={`$${shift.perDiem.toFixed(0)}`} />
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="font-semibold">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}
