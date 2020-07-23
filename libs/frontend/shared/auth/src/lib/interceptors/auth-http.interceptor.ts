import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, first } from 'rxjs/operators';
import { AuthFacade } from '../+state/facade/auth.facade';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private authFacade: AuthFacade) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authFacade.accessToken$.pipe(
            first(),
            exhaustMap((accessToken: string) => {
                if (!accessToken) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                return next.handle(modifiedReq);
            })
        );
    }
}
