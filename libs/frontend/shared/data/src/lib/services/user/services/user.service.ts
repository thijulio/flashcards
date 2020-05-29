import { Injectable } from '@angular/core';
import { User } from '@flashcards/common/types';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    public profile(): Observable<User> {
        return this.userRepository.profile();
    }
}
