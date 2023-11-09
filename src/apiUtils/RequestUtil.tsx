import axios, { AxiosRequestConfig } from "axios";

axios.defaults.timeout = 30000;
axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const requestManager = {
  get: async (url: string, config = {}) => {
    try {
      const response = await axios.get(url, { ...config });
      return response.data;
    } catch (error) {
      console.log("Error while making GET request:", error);
    }
  },
  post: async (url: string, data: any, config = {}) => {
    try {
      const response = await axios.post(url, data, { ...config });
      return response.data;
    } catch (error) {
      console.log("Error while making POST request", error);
    }
  },
};

export default requestManager;
// const userRequest = axios.create({
//   baseURL: "http://localhost:8080",
//   headers: { "Content-type": "application/json" },
// });
