import { Component, ContentChild, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    @Input()
    public logo = '';

    @Output()
    public search = new EventEmitter();

    @ViewChild('input')
    public myInput;
    @ContentChild('imgLogo')
    public myLogo;

    public constructor(
        private _router: Router
    ) {
        console.log('constructor', this.logo);
    }

    public searchBy({ target }: KeyboardEvent): void {
        this.search.emit((target as HTMLInputElement).value);
    }

}
