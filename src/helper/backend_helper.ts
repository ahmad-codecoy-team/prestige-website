import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

// Login Method
export const postJwtLogin = (data, headers) =>
  api.create(url.POST_LOGIN, data, headers);

export const uploadFile = (data, headers) =>
  api.create(url.UPLOAD_FILE, data, headers);

// User
export const getAllUsers = () => api.get(url.GET_USERS, {});
export const searchUsers = (searchTerm) =>
  api.get(`${url.SEARCH_USERS}/${searchTerm}`, {});
export const getUserJobHistory = (userId) =>
  api.get(`${url.GET_USER_JOB_HISTORY}/${userId}`, {});

export const getAvailableJobs = () => api.get(url.GET_AVAILABLE_JOBS, {});

export const getScheduleJobs = () => api.get(url.GET_SCHEDULE_JOBS, {});
export const getScheduleDetails = (id) =>
  api.get(`${url.GET_SCHEDULE_DETAILS}/${id}`, {});

export const getCompletedJobs = (id) =>
  api.get(`${url.GET_COMPLETED_JOBS}/${id}`, {});
