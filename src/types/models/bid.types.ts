export interface BidHeaderData {
  title: string;
  location: string;
  logoSrc?: string;
}

export interface ShiftBid {
  id: string;
  dateISO: string;
  position: string;
  callTimeStart: string;
  callTimeEnd: string;
  rateType: string;
  desiredRate: number;
  perDiem: number;
}
