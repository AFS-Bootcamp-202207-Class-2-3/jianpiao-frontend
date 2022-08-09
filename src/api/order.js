import api from "./api";

const moduleURL = "orders";

export const getAllOrdersByUserId = (id) => {
  return api.get(`user/${id}/${moduleURL}`);
};

export const insertOrder = (order) => {
  return api.post(moduleURL, order);
};

export const getOrderById = (id) => {
  return api.get(`${moduleURL}/${id}`);
};

