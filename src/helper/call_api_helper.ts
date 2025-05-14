// utils/apiHandler.ts

import toast from 'react-hot-toast';

export const handleApiCall = async <T>(apiFunc: () => Promise<T>, successMsg: string, onSuccess?: (res: T) => void) => {
  try {
    const response = await apiFunc();
    if (successMsg) toast.success(successMsg);
    if (onSuccess) onSuccess(response);
    return response;
  } catch (error: any) {
    console.error('API call failed:', error?.response?.data?.message || error.message);
    if (error.response && error.response.status >= 400 && error.response.status < 500) {
      return toast.error(error.response.data.message);
    } else {
      toast.error(error.message || 'An error occurred.');
    }
    throw error;
  }
};
