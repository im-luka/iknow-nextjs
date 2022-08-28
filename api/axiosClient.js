import axios from "axios";
import queryString from "query-string";
import { screenplayApiConfig } from "./apiConfig";

export const screenplayAxiosClient = axios.create({
  baseURL: screenplayApiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: screenplayApiConfig.apiKey }),
});
