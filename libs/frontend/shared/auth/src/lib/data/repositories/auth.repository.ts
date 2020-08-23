import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserRequest, Credentials, UserAuthResponse } from '@flashcards/common/types';
import { Observable } from 'rxjs';

@Injectable()
export class AuthRepository {
    constructor(private readonly httpClient: HttpClient) {}

    public login(credentials: Credentials): Observable<UserAuthResponse> {
        return this.httpClient.post<UserAuthResponse>('/api/auth/login', credentials);
    }

    public register(user: CreateUserRequest): Observable<UserAuthResponse> {
        return this.httpClient.post<UserAuthResponse>('/api/user/register', user);
    }
}
