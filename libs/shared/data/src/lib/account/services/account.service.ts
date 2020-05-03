import { Injectable } from '@angular/core';
import { CreateUserRequest } from '@flashcards/api-interfaces';
import { Observable } from 'rxjs';
import { AccountRepository } from '../repositories/account.repository';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor(private readonly accountRepository: AccountRepository) {}

    public register(user: CreateUserRequest): Observable<any> {
        return this.accountRepository.register(user);
    }

    public user(id: string): Observable<any> {
        return this.accountRepository.user(id);
    }
}
