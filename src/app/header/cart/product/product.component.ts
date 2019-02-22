import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../store/reducers/cart.reducer';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Input()
    public product: ICartProduct;

    @Output()
    public remove: EventEmitter<ICartProduct> = new EventEmitter();

    @Output()
    public increment: EventEmitter<ICartProduct> = new EventEmitter();

    @Output()
    public decrement: EventEmitter<ICartProduct> = new EventEmitter();

    public removeProduct(product: ICartProduct) {
        this.remove.emit(product);
    }

    public incrementProduct(product: ICartProduct) {
        this.increment.emit(product);
    }

    public decrementProduct(product: ICartProduct) {
        if (product.count === 1) {
            this.remove.emit(product);
            return;
        }
        this.decrement.emit(product);
    }

}
