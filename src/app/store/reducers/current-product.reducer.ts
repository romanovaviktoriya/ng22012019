import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GetProductsSuccess, ProductsAction } from '../actions/products.action';
import {
    CurrentProductAction,
    GET_CURRENT_PRODUCT_ERROR,
    GET_CURRENT_PRODUCT_SUCCESS,
    GetCurrentProductSuccess
} from '../actions/current-product.action';

export interface IProduct {
    _id: string;
    title: string;
    serial: number;
    author: string;
    price: number;
    src: string;
}

const initialState: any = {};

export function currentProductReducer(state: IProduct = initialState, action: CurrentProductAction) {
    switch (action.type) {
        case GET_CURRENT_PRODUCT_SUCCESS:
            return (action as GetCurrentProductSuccess).payload;
        case GET_CURRENT_PRODUCT_ERROR:
            return null;
        default:
            return state;
    }
}
