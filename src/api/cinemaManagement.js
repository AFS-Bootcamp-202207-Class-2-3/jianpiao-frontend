import api from "./api";

const moduleURL = "/admin/cinema";

export const getCinema = () => {
    return api.get(`${moduleURL}`);
};

export const updateCinema = (id, cinema) => {
    return api.put(`${moduleURL}/${id}`, cinema);
};
