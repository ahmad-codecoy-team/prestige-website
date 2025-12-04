export const queryKeys = {
  auth: ["auth-user"] as const,

  shifts: {
    available: ["shifts", "available"] as const,

    completed: (userId?: string | number) =>
      ["shifts", "completed", userId] as const,

    scheduled: ["shifts", "scheduled"] as const,
  },
};
