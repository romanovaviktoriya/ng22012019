import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../store';
import { GetProductsPending } from '../../../store/actions/products.action';
import { productsWithBonuses } from '../../../store/reducers/cart.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public text = '';
    public products$;

    public constructor(
        private _store: Store<IStore>,
    ) {}

    public ngOnInit(): void {
        this._store.dispatch(new GetProductsPending());
        this.products$ = this._store.select(productsWithBonuses);
    }

}
