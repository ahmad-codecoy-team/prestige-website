// src/api/services/auth.service.ts
import axiosInstance, { AUTH_TOKEN_KEY } from "@/api/client/axios.config";
import { API_ENDPOINTS } from "../endpoints";

export const AUTH_USER_KEY = "prestige-user";

// ---- Types ----
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

export interface VerifyOTPRequest {
  email: string;
  otp: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    // Optional role field (if backend sends it)
    Role?: {
      name: string;
      [key: string]: any;
    };
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// ---- Service ----
export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    );

    const authData = response.data.data;

    // Persist token & user
    localStorage.setItem(AUTH_TOKEN_KEY, authData.accessToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authData.user));

    return authData;
  },

  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<ApiResponse<AuthResponse>>(
      API_ENDPOINTS.AUTH.SIGNUP,
      data
    );

    const authData = response.data.data;

    localStorage.setItem(AUTH_TOKEN_KEY, authData.accessToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authData.user));

    return authData;
  },

  logout: async (): Promise<void> => {
    try {
      await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch {
      // ignore API error but still clear client state
    } finally {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
    }
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

  getCurrentUser: () => {
    const stored = localStorage.getItem(AUTH_USER_KEY);
    if (!stored) return null;
    try {
      return JSON.parse(stored) as AuthResponse["user"];
    } catch {
      return null;
    }
  },
};
