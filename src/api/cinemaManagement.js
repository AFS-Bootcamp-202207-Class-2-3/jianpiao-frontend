import api from "./api";

const moduleURL = "/admin/cinema";

export const getCinema = () => {
    return api.get(`${moduleURL}`);
};

// export const addHall = (id) => {
//     return api.get(`${moduleURL}/${id}`);
// };
