import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@flashcards/frontend/shared/data';
import { of } from 'rxjs';
import { MyAccountPageComponent } from './my-account-page.component';

describe('MyAccountPageComponent', () => {
    let component: MyAccountPageComponent;
    let fixture: ComponentFixture<MyAccountPageComponent>;
    let userService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MyAccountPageComponent],
            providers: [{ provide: UserService, useValue: { profile: jest.fn() } }],
        });

        fixture = TestBed.createComponent(MyAccountPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        userService = TestBed.inject(UserService);
    });

    test('should get user profile', () => {
        (userService.profile as jest.Mock).mockReturnValue(of({}));

        component.onSubmit();
        expect(userService.profile).toHaveBeenCalled();
    });
});
