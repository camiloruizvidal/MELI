import { AvailableFilterValue, IResultDescription, IResponseDetail } from './../Interfaces/index';
import { Request, Response } from 'express';
import ItemServices from '../Services/Item.services';
import { AvailableFilter, IResultDetail, IItem, IResponseSearch } from '../Interfaces';

type Constructor<T> = { new (): T }

export default class ItemsController {

    public static async getItem(req: Request, res: Response) {

        const id = req.params.id;

        Promise.all([
            ItemServices.getItem(id),
            ItemServices.getDescription(id)
        ])
        .then(response => {
            const item: IResultDetail = response[0].data;
            const detail: IResultDescription = response[1].data;


            let decimals: number = `${item.price}`.split('.').length == 2
                                    ? (`${item.price}`.split('.')[1]).length
                                    : 0;

            const itemDetail: IResponseDetail = {
                author: {// TODO No found data in API
                    name: 'TODO name',
                    lastname: 'TODO lastname'
                },
                item: {
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency_id,
                        amount: item.price,
                        decimals: decimals
                    },
                    picture: item.pictures[0].url,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping,
                    sold_quantity: item.sold_quantity,
                    description: detail.plain_text
                }
            }

            console.log(itemDetail);
            res.json(itemDetail)
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

            let category: string[] = []
            if(categoryIndex > -1) {

                category = response.data.available_filters[categoryIndex].values
                .map((item: AvailableFilterValue) => item.name)
                .sort();

            }

            const search: IResponseSearch = {
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