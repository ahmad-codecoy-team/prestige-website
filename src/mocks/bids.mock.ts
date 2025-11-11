import type { BidHeaderData, ShiftBid } from '@/types';

export const BID_HEADER: BidHeaderData = {
  title: "Behind the Scenes with Evelyn",
  location: "Key West",
};

export const MOCK_SHIFTS: ShiftBid[] = [
  {
    id: "sh1",
    dateISO: "2025-10-13",
    position: "Steward Crew Chief",
    callTimeStart: "12:00",
    callTimeEnd: "17:00",
    rateType: "DR-Full",
    desiredRate: 35,
    perDiem: 0,
  },
  {
    id: "sh2",
    dateISO: "2025-10-13",
    position: "Strike Technician",
    callTimeStart: "12:00",
    callTimeEnd: "17:00",
    rateType: "DR-Half",
    desiredRate: 30,
    perDiem: 0,
  },
  // add more as needed…
];
