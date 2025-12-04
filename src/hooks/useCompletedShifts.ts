import { useQuery } from "@tanstack/react-query";
import { jobService } from "@/api/services";
import { COMPLETED_SHIFTS_MOCK } from "@/mocks/shifts.mock";
import { queryKeys } from "@/lib/queryKeys";

export interface CompletedShift {
  id?: string | number;
  shiftId?: string | number;
  eventId?: string | number;
  [key: string]: unknown;
}

export const useCompletedShifts = (userId?: string | number) => {
  return useQuery<CompletedShift[]>({
    queryKey: queryKeys.shifts.completed(userId),

    queryFn: async () => {
      // ✅ Prefer API, fallback to mocks
      try {
        if (!userId) return COMPLETED_SHIFTS_MOCK;

        // FOR NOW WE ARE JUST USING MOCK SHIFTS....LATER REMOVE THIS LINE ONLY
        if (userId) return COMPLETED_SHIFTS_MOCK;

        const response = await jobService.getCompletedJobs(userId);

        const data = response?.data?.data ?? [];
        return data.length ? data : COMPLETED_SHIFTS_MOCK;
      } catch {
        return COMPLETED_SHIFTS_MOCK;
      }
    },
  });
};
