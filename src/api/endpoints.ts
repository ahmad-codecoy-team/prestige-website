export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    VERIFY_OTP: "/auth/verify-otp",
  },

  // File Upload
  FILE: {
    UPLOAD: "/upload",
  },

  // Users (admin-ish)
  USERS: {
    LIST: "/users",
    SEARCH: "/users/search",
  },

  // Current user
  USER: {
    PROFILE: "/user/profile",
    UPDATE_PROFILE: "/user/profile",
    CHANGE_PASSWORD: "/user/change-password",
    JOB_HISTORY: "/jobs/userJobsHistory",
    WORK_HISTORY: "/quotes/user/completed",
  },

  // Quotes
  QUOTES: {
    CREATE: "/quotes",
    LIST: "/quotes",
    USER_QUOTES: "/quotes/user",
  },

  // Jobs / Shifts (your existing names, but mapped to your actual URLs)
  JOBS: {
    AVAILABLE: "/bids/applied", // previously GET_AVAILABLE_JOBS
    SCHEDULED: "/jobs/user", // previously GET_SCHEDULE_JOBS
    SCHEDULE_DETAILS: "/jobs/myEvent", // previously GET_SCHEDULE_DETAILS
    COMPLETED_DETAILS: "/jobs/eventAndUser", // previously GET_COMPLETED_DETAILS
  },

  // Chat
  CHAT: {
    USER_GROUPS: "/chats/user",
  },
} as const;
