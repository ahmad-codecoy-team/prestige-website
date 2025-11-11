import axiosInstance from '@/api/client/axios.config';
import { API_ENDPOINTS } from '@/api/endpoints';
import type { 
  LoginRequest, 
  SignupRequest, 
  AuthResponse,
  ApiResponse,
  ForgotPasswordRequest,
  VerifyOTPRequest,
  ResetPasswordRequest
} from '@/types';

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );
    return response.data.data;
  },

  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.SIGNUP,
      data
    );
    return response.data.data;
  },

  logout: async (): Promise<void> => {
    await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    localStorage.removeItem('prestige-token');
  },

  forgotPassword: async (data: ForgotPasswordRequest): Promise<void> => {
    await axiosInstance.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, data);
  },

  verifyOTP: async (data: VerifyOTPRequest): Promise<void> => {
    await axiosInstance.post(API_ENDPOINTS.AUTH.VERIFY_OTP, data);
  },

  resetPassword: async (data: ResetPasswordRequest): Promise<void> => {
    await axiosInstance.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, data);
  },
};
