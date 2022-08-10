import api from "./api";

const sessionsUrl = "/sessions";

export const getSessions = (cinemaId, filmId) => {
  return api.get(sessionsUrl + `?cinemaId=${cinemaId}&filmId=${filmId}`);
};
