import api from "./api";

export const loginApi = (user) => {
  return api.post("/user/login", user);
};

export const registerApi = (user) => {
  return api.post("/user/register", user);
};

export const updateUser = (id, user) => {
  return api.put(`/user/${id}`, user);
};
