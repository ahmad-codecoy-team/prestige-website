import { useQuery } from "@tanstack/react-query";

import { jobService } from "@/api/services";
import { dummyShifts } from "@/mocks/shifts.mock";

import type { AvailableShifts } from "@/types";
import { queryKeys } from "@/lib/queryKeys";

export const useAvailableShifts = () => {
  return useQuery<AvailableShifts[]>({
    queryKey: queryKeys.shifts.available,

    queryFn: async () => {
      const response = await jobService.getAvailableJobs();
      const data = response?.data?.data ?? [];

      // FOR NOW LET'S USE DUMMY SHIFTS DATA, LATER REMOVE THIS LINE
      if (data || !data) {
        return dummyShifts;
      }

      // ✅ fallback to mocks if API empty
      return data.length === 0 ? dummyShifts : data;
    },
  });
};
