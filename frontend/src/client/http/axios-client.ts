import axios, { AxiosInstance } from "axios";

const axiosClientInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}${process.env.REACT_APP_BACKEND_BASE_PORT}`,
  timeout: +process.env.REACT_APP_BACKEND_BASE_TIMEOUT!,
});

axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";

axiosClientInstance.defaults.headers.common["Authorization"] = "";

export default axiosClientInstance;
