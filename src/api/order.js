import api from "./api";

const moduleURL = "order/";

export const getAllOrdersByUserId = () => {
  return api.get(moduleURL);
};

export const insertOrder = (order) => {
  return api.post(moduleURL, order);
};

export const getOrderById = (id) => {
  return api.get(`${moduleURL}${id}`);
};

