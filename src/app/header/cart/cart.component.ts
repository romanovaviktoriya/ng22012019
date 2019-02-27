import { Component, OnInit } from '@angular/core';
import { IStore } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICartProduct, selectAll, totalPrice, trueProductsCount } from '../../store/reducers/cart.reducer';
import { DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart } from '../../store/actions/cart.action';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public products$: Observable<ICartProduct[]>;
    public count$: Observable<number>;
    public price$: Observable<number>;

    public constructor(
        private _store: Store<IStore>
    ) { }

    public ngOnInit(): void {
        this.products$ = this._store.select(selectAll);
        this.count$ = this._store.select(trueProductsCount);
        this.price$ = this._store.select(totalPrice);
    }

    public removeProduct(product: ICartProduct) {
        this._store.dispatch(new RemoveProductFromCart(product));
    }

    public incrementProduct(product: ICartProduct) {
        this._store.dispatch(new IncrementProductInCart(product));
    }

    public decrementProduct(product: ICartProduct) {
        this._store.dispatch(new DecrementProductInCart(product));
    }

}
