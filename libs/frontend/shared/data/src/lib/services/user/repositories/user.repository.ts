import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@flashcards/common/types';
import { Observable } from 'rxjs';

@Injectable()
export class UserRepository {
    constructor(private httpClient: HttpClient) {}

    public profile(): Observable<User> {
        return this.httpClient.get<User>('/api/users/me');
    }
}
