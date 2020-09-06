import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, first } from 'rxjs/operators';
import { AuthFacade } from '../data/+state/facade/auth.facade';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private readonly authFacade: AuthFacade) {}

    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return this.authFacade.accessToken$.pipe(
            first(),
            exhaustMap((accessToken: string) => {
                if (!accessToken) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    setHeaders: {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                return next.handle(modifiedReq);
            })
        );
    }
}
