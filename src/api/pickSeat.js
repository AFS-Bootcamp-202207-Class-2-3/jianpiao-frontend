import api from "./api";

const moduleURL = "/sessions";

export const getSeats = (id) => {
  return api.get(`${moduleURL}/${id}`);
};
