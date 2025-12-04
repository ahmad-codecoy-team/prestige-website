// src/api/services/user.service.ts
import axiosInstance from "@/api/client/axios.config";
import { API_ENDPOINTS } from "../endpoints";

export const userService = {
  getAllUsers: () => {
    return axiosInstance.get(API_ENDPOINTS.USERS.LIST);
  },

  searchUsers: (searchTerm: string) => {
    return axiosInstance.get(
      `${API_ENDPOINTS.USERS.SEARCH}/${encodeURIComponent(searchTerm)}`
    );
  },

  getUserJobHistory: (userId: string | number) => {
    return axiosInstance.get(`${API_ENDPOINTS.USER.JOB_HISTORY}/${userId}`);
  },
};
