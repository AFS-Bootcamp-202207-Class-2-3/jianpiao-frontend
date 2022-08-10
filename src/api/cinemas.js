import api from "./api";

const cinemasUrl = "/cinemas";

export const getCinemaById = (cinemaId) => {
  return api.get(cinemasUrl + "/" + cinemaId);
};

export const getFilmsByCinemaId = (cinemaId) => {
  return api.get(cinemasUrl + "/" + cinemaId + "/showingFilms");
};
