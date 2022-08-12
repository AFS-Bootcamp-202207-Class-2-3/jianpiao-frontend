import axios from "axios";
import { message } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import loadingGif from "../assets/loading.gif";

let baseURL = "http://localhost:8080/";
const env = JSON.stringify(process.env);
if (env.indexOf("jianpiao-frontend-staging") !== -1) {
  baseURL = "https://jianpiao-backend-staging.herokuapp.com/";
} else if (env.indexOf("jianpiao-frontend-production") !== -1) {
  baseURL = "https://jianpiao-backend-production.herokuapp.com/";
}

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

// 当前正在请求的数量
let requestCount = 0;

// 显示loading
function showLoading() {
  if (requestCount === 0) {
    var dom = document.createElement("div");

    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDOM.render(
      <img src={loadingGif} alt="" className="loading-gif" />,
      dom
    );
  }
  requestCount++;
}

// 隐藏loading
function hideLoading() {
  requestCount--;
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById("loading"));
  }
}

// 请求前拦截
api.interceptors.request.use(
  (config) => {
    // requestCount为0，才建立loading, 避免重复建立
    if (config.headers.isLoading !== false) {
      showLoading();
    }
    return config;
  },
  (err) => {
    // 判断当前请求是否设置了不显示Loading
    if (err.config.headers.isLoading !== false) {
      hideLoading();
    }
    return Promise.reject(err);
  }
);

// 返回后拦截
api.interceptors.response.use(
  (res) => {
    // 判断当前请求是否设置了不显示Loading
    if (res.config.headers.isLoading !== false) {
      hideLoading();
    }
    return res;
  },
  (err) => {
    if (err.config.headers.isLoading !== false) {
      hideLoading();
    }
    if (err.message === "Network Error") {
      message.warning("网络链接异常！");
    }
    if (err.code === "ECONNABORTED") {
      message.warning("请求超时，请重试");
    }
    return Promise.reject(err);
  }
);

export default api;
