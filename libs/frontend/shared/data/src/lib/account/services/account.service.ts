import { Injectable } from '@angular/core';
import { CreateUserRequest } from '@flashcards/common/types';
import { Observable } from 'rxjs';
import { AccountRepository } from '../repositories/account.repository';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor(private readonly accountRepository: AccountRepository) {}

    public register(user: CreateUserRequest): Observable<any> {
        // type the return
        return this.accountRepository.register(user);
    }

    public user(id: string): Observable<any> {
        // type the return
        return this.accountRepository.user(id);
    }
}

// TODO: Check if it's being used and delete