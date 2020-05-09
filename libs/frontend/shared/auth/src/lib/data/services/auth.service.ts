import { Injectable } from '@angular/core';
import { CreateUserRequest, Credentials, UserAuthResponse } from '@flashcards/common/types';
import { Observable } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable()
export class AuthService {
    constructor(private readonly authenticationRepository: AuthRepository) {}

    public login(credentials: Credentials): Observable<UserAuthResponse> {
        return this.authenticationRepository.login(credentials);
    }

    public register(user: CreateUserRequest): Observable<UserAuthResponse> {
        return this.authenticationRepository.register(user);
    }
}
