import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '@flashcards/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthRepository {
    constructor(private httpClient: HttpClient) {}

    public login(credentials: Credentials): Observable<any> {
        // type the return
        return this.httpClient.post<any>('/api/auth/login', credentials);
    }
}
