// src/constants/bidMocks.ts
export type BidHeaderData = {
  title: string; // e.g., "Behind the Scenes with Evelyn"
  location: string; // e.g., "Key West"
  logoSrc?: string; // optional override
};

export type ShiftBid = {
  id: string;
  dateISO: string; // ISO date (we'll format to "October 13, 2025")
  position: string; // e.g., "Steward Crew Chief"
  callTimeStart: string; // "12:00"
  callTimeEnd: string; // "17:00"
  rateType: string; // e.g., "DR-Full"
  desiredRate: number; // 35
  perDiem: number; // 0
};

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
