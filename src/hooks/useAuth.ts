import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { authService } from "@/api/services/auth.service";
import type { LoginRequest } from "@/types";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/api/services/auth.service";
import { queryKeys } from "@/lib/queryKeys";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  /**
   * ✅ Load user from local storage (no API call required)
   */
  const { data: user, isLoading } = useQuery<User | null>({
    queryKey: queryKeys.auth,

    queryFn: async () => authService.getCurrentUser(),

    staleTime: Infinity,
  });

  /**
   * ✅ Login mutation
   */
  const loginMutation = useMutation({
    mutationFn: (payload: LoginRequest) => authService.login(payload),

    onSuccess: (auth) => {
      queryClient.setQueryData(queryKeys.auth, auth.user);

      toast.success("Logged in successfully");
      navigate("/home");
    },

    onError: (error: AxiosError<ApiResponse<unknown>>) => {
      toast.error(
        error?.response?.data?.message ?? "Invalid email or password"
      );
    },
  });

  const signupMutation = useMutation({
    mutationFn: authService.signup,

    onSuccess: (auth) => {
      queryClient.setQueryData(queryKeys.auth, auth.user);

      toast.success("Account created successfully");
      navigate("/home");
    },

    onError: (error: AxiosError<ApiResponse<unknown>>) => {
      toast.error(
        error.response?.data?.message ?? "Signup failed. Please try again."
      );
    },
  });

  /**
   * ✅ Logout mutation
   */
  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: queryKeys.auth });
      navigate("/login");
    },
  });

  return {
    user,
    loading: isLoading,
    isAuthenticated: !!user,

    // mutations
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    signup: signupMutation.mutate,

    loginMutation,
    signupMutation,
    logoutMutation,
  };
};
