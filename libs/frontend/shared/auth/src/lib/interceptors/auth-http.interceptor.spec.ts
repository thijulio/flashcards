import { HttpClientTestingModule, HttpTestingController } from '@angular//common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthFacade } from '../+state/facade/auth.facade';
import { AuthHttpInterceptor } from './auth-http.interceptor';

describe('AuthHttpInterceptor', () => {
    let http: HttpClient;
    let httpMock: HttpTestingController;
    let authFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
                { provide: AuthFacade, useValue: { accessToken$: {} } },
            ],
        });

        http = TestBed.inject<HttpClient>(HttpClient);
        httpMock = TestBed.inject<HttpTestingController>(HttpTestingController);
        authFacade = TestBed.inject<AuthFacade>(AuthFacade);
    });

    test('should set bearer token', () => {
        authFacade.accessToken$ = of('token');

        http.get('/data').pipe(first()).subscribe();

        const req = httpMock.expectOne('/data');
        expect(req.request.headers.get('Authorization')).toBe('Bearer token');
    });

    test('should not set bearer token', () => {
        authFacade.accessToken$ = of(null);

        http.get('/data').pipe(first()).subscribe();

        const req = httpMock.expectOne('/data');
        expect(req.request.headers.get('Authorization')).toBeNull();
    });
});
