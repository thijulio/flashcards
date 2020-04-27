import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

describe('AccountController', () => {
    // tslint:disable-next-line: no-unused no-unused-declaration
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [AccountController],
            providers: [AccountService],
        }).compile();
    });

    describe('getData', () => {
        // tslint:disable: no-commented-code no-commented-out-code
        // it('should return "Welcome to api!"', () => {
        //     const appController = app.get<AccountController>(AccountController);
        //     expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
        // });
    });
});
