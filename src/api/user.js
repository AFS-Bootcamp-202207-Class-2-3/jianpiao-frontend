import api from "./api";
import { JPApi } from "./http";

export const loginApi = (user) => {
  return api.post("/user/login", user);
};

export const registerApi = (user) => {
  return api.post("/user/register", user);
};

export const getUserById = (id) => {
  return JPApi(`/user/${id}`, "get");
};

export const updateUser = (id, user) => {
  return api.put(`/user/${id}`, user);
};
