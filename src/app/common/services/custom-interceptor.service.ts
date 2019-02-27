import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from '../../config';
import { filter, map, tap } from 'rxjs/operators';

interface IRes {
    data: any;
}

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

    public constructor(
        @Inject(BASE_URL_TOKEN) private _baseUrl: string
    ) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers: HttpHeaders = req.headers
            .append('Content-Type', 'application/json')
            .append('Authorisation', 'Barer 112asdasda124123');
        const jsonReq = req.clone({
            headers,
            url: `${this._baseUrl}${req.url}`
        });

        return next.handle(jsonReq)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    console.log('EVENT=>', event);
                }),
                filter(this._isHttpResponse),
                map((res: HttpResponse<IRes>) => {
                    return res.clone({ body: res.body && res.body.data });
                }),
            );
    }

    private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<IRes> {
        if (event instanceof HttpResponse) {
            return true;
        }
        return false;
    }
}
