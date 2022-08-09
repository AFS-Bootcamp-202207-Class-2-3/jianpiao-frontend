import api from "./api";

const filmUrl = "/film";

export const getAllFilms = () => {
  return api.get(filmUrl);
};
