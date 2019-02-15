import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ToUsdPipe } from './common/pipes/to-usd.pipe';
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
        ToUsdPipe
    ],
    imports: [
        BrowserModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
