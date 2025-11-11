import type { InvoiceMockData } from '@/types';

export const INVOICE_MOCK_DATA: InvoiceMockData = {
  user: {
    name: "Nimra Razzaq",
    location: "california",
    phone: "090078601",
    email: "cctqa1@gmail.com",
    ssn: "SSN",
  },
  event: {
    name: "Quality check",
    venue: "Royal Palm Golf & Country Club, Canal Bank Road, Lahore, Pakistan",
    jobNumber: "AACCT-2025-489",
    date: "10/23/25",
    position: "Crew Chief-Working Carp",
  },
  invoice: {
    clockIn: "08:00",
    mealBreak: "1 hr",
    clockOut: "20:00",
    rate: "35",
    regHrs: "11",
    otHrs: "0",
    dtHrs: "0",
    perDiem: "3",
  },
  serviceFeePercentage: 5, // 5% service fee
};

export const MEAL_BREAK_OPTIONS = [
  "No break",
  "30 min",
  "1 hr",
  "1.5 hr",
  "2 hr",
];
