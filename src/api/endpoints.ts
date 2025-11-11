export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_OTP: '/auth/verify-otp',
  },
  
  // Shifts
  SHIFTS: {
    AVAILABLE: '/shifts/available',
    SCHEDULED: '/shifts/scheduled',
    COMPLETED: '/shifts/completed',
    DETAILS: (id: string) => `/shifts/${id}`,
  },
  
  // Jobs
  JOBS: {
    LIST: '/jobs',
    DETAILS: (id: string) => `/jobs/${id}`,
    CREATE: '/jobs',
    UPDATE: (id: string) => `/jobs/${id}`,
    DELETE: (id: string) => `/jobs/${id}`,
  },
  
  // Bids
  BIDS: {
    CREATE: '/bids',
    LIST: '/bids',
    DETAILS: (id: string) => `/bids/${id}`,
  },
  
  // Chat
  CHAT: {
    GROUPS: '/chat/groups',
    MESSAGES: (groupId: string) => `/chat/groups/${groupId}/messages`,
    SEND_MESSAGE: (groupId: string) => `/chat/groups/${groupId}/messages`,
  },
  
  // Attendance
  ATTENDANCE: {
    CLOCK_IN: '/attendance/clock-in',
    CLOCK_OUT: '/attendance/clock-out',
    MEAL_BREAK: '/attendance/meal-break',
    HISTORY: '/attendance/history',
  },
  
  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
    WORK_HISTORY: '/user/work-history',
  },
} as const;
