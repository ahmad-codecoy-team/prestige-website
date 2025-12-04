// src/utils/apiHandler.ts
import toast from "react-hot-toast";

type ApiErrorShape = {
  response?: { status?: number; data?: { message?: string } };
  message?: string;
};

export const handleApiCall = async <T>(
  apiFunc: () => Promise<T>,
  successMsg?: string,
  onSuccess?: (res: T) => void
): Promise<T> => {
  try {
    const response = await apiFunc();

    if (successMsg) {
      toast.success(successMsg);
    }

    if (onSuccess) {
      onSuccess(response);
    }

    return response;
  } catch (error: unknown) {
    const err = error as ApiErrorShape;

    console.error(
      "API call failed:",
      err?.response?.data?.message || err.message
    );

    if (
      err.response?.status &&
      err.response.status >= 400 &&
      err.response.status < 500
    ) {
      toast.error(err.response.data?.message || "An error occurred.");
    } else {
      toast.error(err.message || "An error occurred.");
    }

    throw error;
  }
};
