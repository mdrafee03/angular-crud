import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
    constructor(
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const baseUrl = environment.baseUrl;
        const httpsReq = req.clone({
            url: baseUrl + '/' + req.url
          });
        return next.handle(httpsReq);
    }
}
