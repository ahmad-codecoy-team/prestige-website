import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { authService } from "@/api/services/auth.service";
import type { LoginRequest } from "@/types";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const AUTH_QUERY_KEY = ["auth-user"];

export const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  /**
   * ✅ Load user from local storage (no API call required)
   */
  const { data: user, isLoading } = useQuery<User | null>({
    queryKey: AUTH_QUERY_KEY,

    queryFn: async () => authService.getCurrentUser(),

    staleTime: Infinity,
  });

  /**
   * ✅ Login mutation
   */
  const loginMutation = useMutation({
    mutationFn: (payload: LoginRequest) => authService.login(payload),

    onSuccess: (auth) => {
      queryClient.setQueryData(AUTH_QUERY_KEY, auth.user);

      toast.success("Logged in successfully");
      navigate("/home");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ?? "Invalid email or password"
      );
    },
  });

  /**
   * ✅ Logout mutation
   */
  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: AUTH_QUERY_KEY });
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

    loginMutation,
    logoutMutation,
  };
};
