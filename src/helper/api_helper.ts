import { config } from "../config";
import axios from "axios";
// default
axios.defaults.baseURL = config.API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    const token = JSON.parse(
      localStorage.getItem("prestige-website")
    )?.accessToken;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("config--->", config);
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Sets the default authorization
 * @param {*} token
 */
// const setAuthorization = (token) => {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// };

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url, params) => {
    let response;

    const paramKeys = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });

      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }
    return response;
    // return axios.get(url, { params });
  };
  /**
   * post given data to url
   */

  create = (url, data, headers) => {
    return axios.post(url, data, headers);
  };
  /**
   * Updates data
   */

  update = (url, data) => {
    return axios.put(url, data);
  };

  /**
   * Delete
   */

  delete = (url, params) => {
    return axios.delete(url, { params });
  };
}
const getLoggedinUser = () => {
  const user = localStorage.getItem("berkshire");

  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, getLoggedinUser };
