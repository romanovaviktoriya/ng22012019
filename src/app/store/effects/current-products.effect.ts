import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../../products.service';
import { IProduct } from '../reducers/products.reducer';
import {
    GET_CURRENT_PRODUCT_PENDING,
    GetCurrentProductError,
    GetCurrentProductPending,
    GetCurrentProductSuccess
} from '../actions/current-product.action';

@Injectable()
export class CurrentProductEffects {

    @Effect()
    product$ = this._actions$
        .pipe(
            ofType(GET_CURRENT_PRODUCT_PENDING),
            switchMap((action: GetCurrentProductPending) => this._products.getProduct(action.payload)
                .pipe(
                    map((product: IProduct) => new GetCurrentProductSuccess(product)),
                    catchError((err) => of(new GetCurrentProductError(err)))
                ))
        );

    constructor(
        private _actions$: Actions,
        private _products: ProductsService
    ) {}
}
