import { Injectable } from '@angular/core';
import { Credentials } from '@flashcards/common/types';
import { Observable } from 'rxjs';
import { AuthRepository } from '../repositories/auth.repository';

@Injectable()
export class AuthService {
    constructor(private readonly authenticationRepository: AuthRepository) {}

    public login(credentials: Credentials): Observable<any> {
        // type the return
        return this.authenticationRepository.login(credentials);
    }
}
