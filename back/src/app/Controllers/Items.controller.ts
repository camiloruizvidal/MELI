import { AvailableFilterValue } from './../Interfaces/index';
import { Request, Response } from 'express';
import ItemServices from '../Services/Item.services';
import { AvailableFilter, IResultDetail, IItem, ISearch } from '../Interfaces';

type Constructor<T> = { new (): T }

export default class ItemsController {

    public static async getDescription(req: Request, res: Response) {

        ItemServices.getDescription(req.params.id)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            res.status(404).json(error)
        })

    }

    public static async getItem(req: Request, res: Response) {

        ItemServices.getItem(req.params.id)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            res.status(404).json(error)
        })

    }

    public static async getQuery(req: Request, res: Response) {

        const query:string = encodeURI(`${req.query.search}`).trim();

        ItemServices.getSearch(query)
        .then((response) => {

            const resultItems: IItem[] = response.data.results
                                        .map((value: IResultDetail) => {

                let decimals: number = `${value.price}`.split('.').length == 2
                                        ? (`${value.price}`.split('.')[1]).length
                                        : 0;

                return {
                    id: value.id,
                    title: value.title,
                    price: {
                        currency: value.prices.presentation.display_currency,
                        amount: value.price,
                        decimals: decimals
                    },
                    picture: value.thumbnail,
                    condition: value.condition,
                    free_shipping: value.shipping.free_shipping
                };

            })

            const categoryIndex = response.data.available_filters
                                    .findIndex((item: AvailableFilter) => item.id == 'category')

            const category: string[] = response.data.available_filters[categoryIndex].values
                                        .map((item: AvailableFilterValue) => item.name)
                                        .sort();

            const search: ISearch = {
                author: {// TODO No found data in API
                    name: 'TODO name',
                    lastname: 'TODO lastname'
                },
                categories: category,
                items: resultItems
            }

            res.json(search);

        })
        .catch(error => {
            console.log(error)
            res.status(404).json(error)
        })

    }

}