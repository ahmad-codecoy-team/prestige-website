// src/constants/dummyShifts.ts
import type { AvailableShifts } from "@/types";
export const dummyShifts: AvailableShifts[] = [
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
