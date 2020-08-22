import { TestBed } from '@angular/core/testing';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    let repository: UserRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService, { provide: UserRepository, useValue: { profile: jest.fn() } }],
        });
        service = TestBed.inject(UserService);
        repository = TestBed.inject(UserRepository);
    });

    test('should get profile', () => {
        service.profile();

        expect(repository.profile).toHaveBeenCalledWith();
    });
});
