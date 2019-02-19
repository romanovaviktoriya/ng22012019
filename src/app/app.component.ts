import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

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

    // public control$$ = new Subject();

    public constructor(
        private _productsService: ProductsService
    ) {}

    public ngOnInit(): void {
        this.products$ = this._productsService.getProducts();
        // data$.pipe(takeUntil(this.control$$)).subscribe((products: IProduct[]) => {
        //           this.products = products;
        //       }
        //   );
    }

    // public ngOnDestroy(): void {
    //     this.control$$.next(true);
    // }

    toUSD(price: number): number {
        return 66 * price;
    }
}
