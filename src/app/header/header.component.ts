import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component, ContentChild,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output, ViewChild
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges,
    AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck {

    @Input()
    public logo = '';

    @Output()
    public search = new EventEmitter();

    @ViewChild('input')
    public myInput;
    @ContentChild('imgLogo')
    public myLogo;

    public constructor() {
        console.log('constructor', this.logo);
    }

    public searchBy({ target }: KeyboardEvent): void {
        this.search.emit((target as HTMLInputElement).value);
    }

    public ngOnChanges(value): void {
        console.log('ngOnChanges', value);
    }

    public ngOnInit(): void {
        console.log('ngOnInit', this.logo);
    }

    public ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    public ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
        console.log(this.myInput);
    }

    public ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    public ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
        console.log(this.myLogo)
    }

    public ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }
}
