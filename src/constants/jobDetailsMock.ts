// src/constants/jobDetailsMock.ts
export type JobDetailsData = {
  location: string;
  eventName: string;
  venue?: string; // optional second line below event name (e.g., "EXPO CENTER")
  dateISO: string; // ISO date for formatting
  position: string;
  callTimeStart: string;
  callTimeEnd: string;
  rateType: string;
  bid: number;
  perDiem: number;
  reminderNotes?: string;
  shiftNote?: string;
  pointOfContact?: string; // Added missing property
};

export const JOB_DETAILS_MOCK: JobDetailsData = {
  location: "Lahore",
  eventName: "expo event",
  venue: "EXPO CENTER",
  dateISO: "2025-10-09",
  position: "Extra Stagehand",
  callTimeStart: "11:00",
  callTimeEnd: "14:00",
  rateType: "DR-Full",
  bid: 60,
  perDiem: 0,
  reminderNotes: "", // empty is fine (row still renders)
  shiftNote: "testing quote",
};
