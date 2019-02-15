import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../common/mock/data';

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

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        console.log(this.context);
    }

}
