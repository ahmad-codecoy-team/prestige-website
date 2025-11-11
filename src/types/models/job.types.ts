export interface JobDetailsData {
  location: string;
  eventName: string;
  venue?: string;
  dateISO: string;
  position: string;
  callTimeStart: string;
  callTimeEnd: string;
  rateType: string;
  bid: number;
  perDiem: number;
  reminderNotes?: string;
  shiftNote?: string;
  pointOfContact?: string;
}
