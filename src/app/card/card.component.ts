import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../store/reducers/products.reducer';
import { IStore } from '../store';
import { Store } from '@ngrx/store';
import { AddProductToCart } from '../store/actions/cart.action';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit {

    @Input()
    public product: IProduct;
    @Input()
    public position: number;

    @Input()
    public isOdd: boolean;

    @ViewChild('t')
    public context;

    public constructor(
        private _store: Store<IStore>
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        console.log(this.context);
    }

    public addProductToCart(product: IProduct): void {
        this._store.dispatch(new AddProductToCart(product));
    }
}
