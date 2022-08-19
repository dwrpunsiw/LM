import axios, { AxiosInstance } from "axios";

const axiosGeneral: AxiosInstance = axios.create();

axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";

export default axiosGeneral;
