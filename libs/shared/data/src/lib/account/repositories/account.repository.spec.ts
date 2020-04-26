import { TestBed } from '@angular/core/testing';
import { AccountRepository } from './account.repository';

describe('AccountRepository', () => {
    let service: AccountRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AccountRepository);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
