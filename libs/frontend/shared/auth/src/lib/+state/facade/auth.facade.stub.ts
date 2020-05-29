import { CreateUserRequest, Credentials } from '@flashcards/common/types';
import { Observable, of } from 'rxjs';

export class AuthFacadeStub {
    public get isUseLoggedIn$(): Observable<boolean> {
        return of(true);
    }

    public get accessToken$(): Observable<string> {
        return of('token');
    }

    public login(_credentials: Credentials): void {
        return;
    }

    public register(_user: CreateUserRequest): void {
        return;
    }

    public logout(): void {
        return;
    }
}
