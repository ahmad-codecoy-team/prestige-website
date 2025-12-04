// src/api/services/file.service.ts
import axiosInstance from "@/api/client/axios.config";
import { API_ENDPOINTS } from "../endpoints";

export const fileService = {
  uploadFile: (data: FormData) => {
    return axiosInstance.post(API_ENDPOINTS.FILE.UPLOAD, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
