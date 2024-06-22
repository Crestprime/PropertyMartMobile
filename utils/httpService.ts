import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig,
  } from "axios";
  import * as SecureStorage from "expo-secure-store";
  
  
  export const FRONTEND_BASE_URL = "https://propertymart-development-server-production.up.railway.app"

  const LIVE_URL = "https://propertymartserver-06e7eac41e27.herokuapp.com/api/v1/"
  const AIRTEL_URL = 'http://192.168.1.191:8000/api/v1/'
  export const BASE_URL = AIRTEL_URL;
  export const IMAGE_BASE = "";
  const SITE_URL=''
  
  const httpService = axios.create({
    baseURL: BASE_URL,
  });
  
  httpService.interceptors.request.use(
    async (config: InternalAxiosRequestConfig<any>) => {
      const token = await SecureStorage.getItemAsync("token");
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
        if (token === null) {
          return config;
        }
        config.headers!["authorization"] = `Bearer ${token}`;
  
        return config;
      } else {
        config.headers!["Content-Type"] = "application/json";
        if (token === null) {
          return config;
        }
        config.headers!["authorization"] = `Bearer ${token}`;
        return config;
      }
    }
  );
  
  httpService.interceptors.response.use(
    (response: AxiosResponse<any, any>) => {
      return response;
    },
    async (error: AxiosError<any, any>) => {
      if (!error.response) {
        return Promise.reject(error.message);
      } else {
        return Promise.reject(error.response.data);
      }
    }
  );
  export default httpService;
  