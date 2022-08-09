import axios from "axios";

let baseURL = "http://localhost:8080/";
const env = JSON.stringify(process.env);
<<<<<<< HEAD
if (env.indexOf("jianpiao-frontend-staging") !== -1) {
  baseURL = "https://jianpiao-banckend-staging.herokuapp.com/";
} else if (env.indexOf("jianpiao-frontend-production") !== -1) {
  baseURL = "https://jianpiao-banckend-production.herokuapp.com/";
=======
console.log(env)

if(env.indexOf("jianpiao-frontend-staging")!==-1){
    baseURL="https://jianpiao-backend-staging.herokuapp.com/"
}else if(env.indexOf("jianpiao-frontend-production")!==-1){
    baseURL="https://jianpiao-backend-production.herokuapp.com/"
>>>>>>> 793be9c633c7c045e7a3621275d9c1082eefbdb7
}
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default api;
