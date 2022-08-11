import { JPApi } from "./http";

const moduleURL = "/sessions";

export const getSessions = (userId) => {
  return JPApi(`/user/${userId}/sessions`, "get");
};

export const addSession = (id, session) => {
  return JPApi(`${moduleURL}/${id}`, "post", session);
};

export const deleteSession = (id, session) => {
  return JPApi(`${moduleURL}/${id}`, "delete", session);
};
