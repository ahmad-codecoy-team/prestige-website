// src/api/services/job.service.ts
import { axiosInstance } from "@/api";
import { API_ENDPOINTS } from "../endpoints";

export const jobService = {
  getAvailableJobs: () => {
    return axiosInstance.get(API_ENDPOINTS.JOBS.AVAILABLE);
  },

  getScheduledJobs: () => {
    return axiosInstance.get(API_ENDPOINTS.JOBS.SCHEDULED);
  },

  getScheduleDetails: (id: string | number) => {
    return axiosInstance.get(`${API_ENDPOINTS.JOBS.SCHEDULE_DETAILS}/${id}`);
  },

  getCompletedJobs: (userId: string | number) => {
    // based on your old GET_COMPLETED_JOBS = "/quotes/user"
    return axiosInstance.get(`${API_ENDPOINTS.QUOTES.USER_QUOTES}/${userId}`);
  },
};
