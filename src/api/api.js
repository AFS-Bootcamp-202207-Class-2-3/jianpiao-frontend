import axios from "axios";

let baseURL = "http://localhost:8080/";
const env = JSON.stringify(process.env);

if (env.indexOf("jianpiao-frontend-staging") !== -1) {
  baseURL = "https://jianpiao-backend-staging.herokuapp.com/";
} else if (env.indexOf("jianpiao-frontend-production") !== -1) {
  baseURL = "https://jianpiao-backend-production.herokuapp.com/";
}
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default api;
