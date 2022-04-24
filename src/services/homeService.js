import { Axios } from "./Axios";

function getHome(payload) {
    return Axios.post('home',payload);
}

export const homeService = {
    getHome,
};