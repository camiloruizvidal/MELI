import axios from "axios";
import env from "../config/env"

const API = env.API_HOST;

export const getItem = (id) => {
    return axios.get(`${API}/items/${id}`);
}

export const searchItems = (query) => {
    query = encodeURI(query);
    return axios.get(`${API}/items?search=${query}`);
}