import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ToUsdPipe } from './common/pipes/to-usd.pipe';
import { ProductsService } from './products.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BASE_URL_TOKEN } from './config';
import { CustomInterceptorService } from './common/services/custom-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effect';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './header/cart/product/product.component';
// module, directive,pipe, service

// es6 - import/export let/const
// ng - declarations/let   imports/import[] exports/export[]

// aot vs jit;

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective,
        ToUsdPipe,
        CartComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([ProductsEffects]),
        environment.production
            ? []
            : StoreDevtoolsModule.instrument()
    ],
    exports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptorService,
            multi: true
        },
        ProductsService,
        {
            provide: BASE_URL_TOKEN,
            useValue: environment.baseUrl,
        },
        {
            provide: 'BASE_URL',
            useValue: 'localhost:3000',
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
