import { Injectable } from '@angular/core';
import { CreateUserRequest, Credentials, UserAuthResponse } from '@flashcards/common/types';
import { Observable } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private readonly authRepository: AuthRepository) {}

    public login(credentials: Credentials): Observable<UserAuthResponse> {
        return this.authRepository.login(credentials);
    }

    public register(user: CreateUserRequest): Observable<UserAuthResponse> {
        return this.authRepository.register(user);
    }
}
