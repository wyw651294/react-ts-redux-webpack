import axios from "axios";
import { url } from "../config.js";
import { any } from "prop-types";

export interface AxiosRequestConfig {
  baseURL?: string; // 请求的基础链接
  headers?: any; // 请求头设置
  params?: any; // 请求参数
  data?: any; // 请求体
  timeout?: number; // 超时设置
  withCredentials?: boolean; // CSRF 相关
  url?: string;
  method?: string;
}

const config: AxiosRequestConfig = {
  timeout: 10000,
  baseURL: url.baseUri,
  headers: {
    "Content-Type": "application/json",
    token: localStorage.getItem("token")
  }
};

const axiosReq = axios.create(config);

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}
export default function request(options: AxiosRequestConfig) {
  return axiosReq(options)
    .then(checkStatus)
    .catch((error: any) => {
      console.log("request error", error);
    });
}