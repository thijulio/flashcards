import { TestBed } from '@angular/core/testing';
import { CreateUserRequest, Credentials } from '@flashcards/common/types';
import { AuthRepository } from '../repositories/auth.repository';
import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;
    let repository;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService, { provide: AuthRepository, useValue: { login: jest.fn(), register: jest.fn() } }],
        });
        service = TestBed.inject(AuthService);
        repository = TestBed.inject(AuthRepository);
    });

    test('should login', () => {
        const credentials: Credentials = { email: 'email@email.com', password: 'password' };
        service.login(credentials);

        expect(repository.login).toHaveBeenCalledWith(credentials);
    });

    test('should register', () => {
        const user: CreateUserRequest = {
            email: 'email@email.com',
        } as any;

        service.register(user);

        expect(repository.register).toHaveBeenCalledWith(user);
    });
});
