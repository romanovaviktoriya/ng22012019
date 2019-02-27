import { ActionReducerMap } from '@ngrx/store';
import { IProduct, productsReducer } from './reducers/products.reducer';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { EntityState } from '@ngrx/entity';
import { IUser, userReducer } from './reducers/user.reducer';
import { currentProductReducer } from './reducers/current-product.reducer';

export interface IStore {
    products: IProduct[];
    cart: EntityState<ICartProduct>;
    user: IUser;
    currentProduct: any;
}

export const reducers: ActionReducerMap<IStore> = {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    currentProduct: currentProductReducer
};
