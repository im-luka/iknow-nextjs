import axios from "axios";
import queryString from "query-string";
import { screenplayApiConfig } from "./apiConfig";

export const screenplayAxiosClient = axios.create({
  baseURL: screenplayApiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Retry-After": 5,
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: screenplayApiConfig.apiKey }),
});
