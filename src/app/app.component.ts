import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { data$ } from './common/mock/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
    public appLogo = 'assets/img/logo.png';
    public text = '';
    public products$ = data$;

    // public control$$ = new Subject();

    public ngOnInit(): void {
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
