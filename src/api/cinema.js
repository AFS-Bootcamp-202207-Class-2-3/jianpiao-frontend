import api from "./api";

const moduleURL = "cinemas";

export const getAllCinema = () => {
  return api.get(`${moduleURL}`);
};

export const getCinemaById = (id) => {
  return api.get(`${moduleURL}/${id}`);
};

export const getCinemaByFilmId = (id) => {
  return api.get(`films/${id}/showingCinemas`);
};
