// src/constants/scheduledShiftsMock.ts

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
    isLead: true, // Shift Lead
    pointOfContact: "nimra",
  },
];
