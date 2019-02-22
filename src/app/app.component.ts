import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from './store';
import { GetProductsPending } from './store/actions/products.action';
import { productsWithBonuses } from './store/reducers/cart.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
    public appLogo = 'assets/img/logo.png';
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
