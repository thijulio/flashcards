import { CreateUserRequest, Credentials } from '@flashcards/common/types';
import { Observable, of } from 'rxjs';

export class AuthFacadeStub {
    public isUseLoggedIn$: Observable<boolean> = of(true);

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
