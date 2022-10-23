import { IMeliResponse, IResultDescription, IResultDetail } from './../Interfaces/index';
import axios from "axios";

export default class ItemServices {

    public static getSearch(query: string) {
        return axios.get<IMeliResponse>(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);

    }

    public static getDescription(id: string) {
        return axios.get<IResultDescription>(`https://api.mercadolibre.com/items/${id}/description`);
    }

    public static getItem(id: string) {
        return axios.get<IResultDetail>(`https://api.mercadolibre.com/items/${id}`);
    }

}