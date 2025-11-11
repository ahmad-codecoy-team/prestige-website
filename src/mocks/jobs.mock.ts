import type { JobDetailsData } from '@/types';

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
