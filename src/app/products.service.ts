import { IProduct } from './common/mock/data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

    public constructor(
        private _http: HttpClient,
    ) {}

    public getProducts(): Observable<IProduct[]> {
       // example const user: IUser = { firstName: 'Igor' };
        return this._http.get<IProduct[]>(`/products`);
    }
}
