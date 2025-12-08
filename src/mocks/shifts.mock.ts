// src/mocks/shifts.mock.ts

import type { AvailableShifts } from "@/types";

// Minimal fields the JobCard needs for the "completed" variant.
// We include one item per status to verify pill colors and labels.
export const COMPLETED_SHIFTS_MOCK = [
  {
    id: 9001,
    startDate: "2025-10-03T00:00:00.000Z",
    endDate: "2025-10-03T00:00:00.000Z",
    status: "Unsubmitted",
    // Location + naming via nested Event to match JobCard expectations
    shift: {
      Event: {
        title: "Lahore Startup & Innovation Expo 2025",
        venue: "Punjab",
        address: "Lahore",
      },
    },
  },
  {
    id: 9002,
    startDate: "2025-10-10T00:00:00.000Z",
    endDate: "2025-10-10T00:00:00.000Z",
    status: "Submitted",
    shift: {
      Event: {
        title: "Sales and Strategy Conference",
        venue: "Punjab",
        address: "Lahore",
      },
    },
  },
  {
    id: 9003,
    startDate: "2025-09-26T00:00:00.000Z",
    endDate: "2025-09-26T00:00:00.000Z",
    status: "Submitted",
    shift: {
      Event: {
        title: "Summer Festival",
        venue: "Punjab",
        address: "Lahore",
      },
    },
  },
  {
    id: 9004,
    startDate: "2025-12-01T00:00:00.000Z",
    endDate: "2025-12-02T00:00:00.000Z",
    status: "Approved",
    shift: {
      Event: {
        title: "CCT Annual Dinner",
        venue: "Punjab",
        address: "Lahore",
      },
    },
  },
  {
    id: 9005,
    startDate: "2025-10-08T00:00:00.000Z",
    endDate: "2025-10-08T00:00:00.000Z",
    status: "Approved",
    shift: {
      Event: {
        title: "Exhibition of the Year",
        venue: "Punjab",
        address: "Lahore",
      },
    },
  },
  {
    id: 9006,
    startDate: "2025-10-04T00:00:00.000Z",
    endDate: "2025-10-04T00:00:00.000Z",
    status: "Paid",
    shift: {
      Event: {
        title: "Annual Corporate Gala Dinner 2025",
        venue: "Punjab",
        address: "Lahore",
      },
    },
  },
];

// Scheduled shifts mock data
export const SCHEDULED_SHIFTS_MOCK = [
  {
    id: 1,
    position: "Graphics Operator",
    rateType: "DR-Full",
    desiredRate: 60,
    diemCost: 0,
    reminderNotes: "test time",
    shiftNote: "graphics operator need for golf view",
    startDate: "2025-08-18T00:00:00.000Z",
    endDate: "2025-08-18T00:00:00.000Z",
    startTime: "11:00",
    endTime: "15:00",
    quantity: 4,
    city: "Lahore",
    isLead: false,
  },
  {
    id: 2,
    position: "Strike Technician",
    rateType: "Hourly",
    desiredRate: 40,
    diemCost: 0,
    reminderNotes: "",
    shiftNote: "1st shift with different position",
    startDate: "2025-10-14T00:00:00.000Z",
    endDate: "2025-10-14T00:00:00.000Z",
    startTime: "08:00",
    endTime: "19:00",
    quantity: 3,
    city: "Lahore",
    isLead: true,
    pointOfContact: "nimra",
  },
];

// Available shifts mock data (for development/fallback)
export const AVAILABLE_SHIFTS_MOCK: AvailableShifts[] = [
  {
    id: 1,
    startDate: "2025-08-14T00:00:00.000Z",
    endDate: "2025-08-14T00:00:00.000Z",
    quantity: 3,
    position: "Video Lead",
    shift: {
      id: 1047,
      position: "Video Lead",
      startDate: "2025-08-14T00:00:00.000Z",
      endDate: "2025-08-14T00:00:00.000Z",
      Event: {
        id: 316,
        title: "Concert Setup",
        venue: "Orchid Hall",
        address: "Bahria Orchard Phase 2, Lahore, Pakistan",
      },
    },
  },
  {
    id: 2,
    startDate: "2025-08-15T00:00:00.000Z",
    endDate: "2025-08-16T00:00:00.000Z",
    quantity: 4,
    position: "Lighting Stagehand",
    shift: {
      id: 1048,
      position: "Lighting Stagehand",
      startDate: "2025-08-15T00:00:00.000Z",
      endDate: "2025-08-16T00:00:00.000Z",
      Event: {
        id: 317,
        title: "Wedding Lighting Setup",
        venue: "Palm Arena",
        address: "Gulberg III, Lahore, Pakistan",
      },
    },
  },
  {
    id: 3,
    startDate: "2025-08-18T00:00:00.000Z",
    endDate: "2025-08-18T00:00:00.000Z",
    quantity: 5,
    position: "Audio Engineer",
    shift: {
      id: 1049,
      position: "Audio Engineer",
      startDate: "2025-08-18T00:00:00.000Z",
      endDate: "2025-08-18T00:00:00.000Z",
      Event: {
        id: 318,
        title: "Corporate Conference",
        venue: "Expo Center Hall 2",
        address: "Johar Town, Lahore, Pakistan",
      },
    },
  },
];

// Legacy export for backward compatibility
export const dummyShifts = AVAILABLE_SHIFTS_MOCK;
