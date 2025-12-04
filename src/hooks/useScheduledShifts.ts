import { useQuery } from "@tanstack/react-query";
import { jobService } from "@/api/services";
import { SCHEDULED_SHIFTS_MOCK } from "@/mocks/shifts.mock";
import { queryKeys } from "@/lib/queryKeys";

export interface ScheduledShift {
  id: string | number;
  [key: string]: unknown;
}

export const useScheduledShifts = () => {
  return useQuery<ScheduledShift[]>({
    queryKey: queryKeys.shifts.scheduled,

    queryFn: async () => {
      try {
        const response = await jobService.getScheduledJobs();

        const data = response?.data?.data ?? [];
        console.log("Scheduled shifts data--->", data);

        // Temporaily displaying mock shifts data, later remove this line
        if (data || !data) return SCHEDULED_SHIFTS_MOCK;

        // ✅ API first, fallback to mocks
        return data.length ? data : SCHEDULED_SHIFTS_MOCK;
      } catch {
        return SCHEDULED_SHIFTS_MOCK;
      }
    },
  });
};
