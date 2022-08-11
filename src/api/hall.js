import api from "./api";

const moduleURL = "admin/halls";

export const getAllHallsByCinemaId = (id) => {
  return api.get(`${moduleURL}`);
};

export const addHall = (id) => {
  return api.get(`${moduleURL}/${id}`);
};
