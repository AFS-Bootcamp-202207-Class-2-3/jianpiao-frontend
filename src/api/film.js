import api from "./api";

const filmUrl = "/films";

export const getAllFilms = () => {
  return api.get(filmUrl, { Headers: { Cookie: "test" } });
};

export const getFilmById = (id) => {
  return api.get(`films/${id}`, {});
};

export const addFilm = (film) => {
  return api.post(filmUrl, film);
};
