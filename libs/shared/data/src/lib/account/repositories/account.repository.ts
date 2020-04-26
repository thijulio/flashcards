import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserRequest } from '@flashcards/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AccountRepository {
    constructor(private httpClient: HttpClient) {}

    public register(user: CreateUserRequest): Observable<any> {
        return this.httpClient.post<any>('/api/account', user);
    }

    public user(id: string): Observable<any> {
        return this.httpClient.get<any>(`/api/account/${id}`);
    }
}
