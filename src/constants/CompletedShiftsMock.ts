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
