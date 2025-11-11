import axiosInstance from '@/api/client/axios.config';
import { API_ENDPOINTS } from '@/api/endpoints';
import type { Shift, ApiResponse, PaginatedResponse } from '@/types';

export const shiftsService = {
  getAvailableShifts: async (): Promise<Shift[]> => {
    const response = await axiosInstance.get<ApiResponse<Shift[]>>(
      API_ENDPOINTS.SHIFTS.AVAILABLE
    );
    return response.data.data;
  },

  getScheduledShifts: async (): Promise<Shift[]> => {
    const response = await axiosInstance.get<ApiResponse<Shift[]>>(
      API_ENDPOINTS.SHIFTS.SCHEDULED
    );
    return response.data.data;
  },

  getCompletedShifts: async (page = 1, limit = 10): Promise<PaginatedResponse<Shift>> => {
    const response = await axiosInstance.get<ApiResponse<PaginatedResponse<Shift>>>(
      API_ENDPOINTS.SHIFTS.COMPLETED,
      { params: { page, limit } }
    );
    return response.data.data;
  },

  getShiftDetails: async (id: string): Promise<Shift> => {
    const response = await axiosInstance.get<ApiResponse<Shift>>(
      API_ENDPOINTS.SHIFTS.DETAILS(id)
    );
    return response.data.data;
  },
};
