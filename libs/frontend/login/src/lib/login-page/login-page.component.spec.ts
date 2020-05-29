import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFacade } from '@flashcards/frontend/shared/auth';
import { LoginPageComponent } from './login-page.component';

const EMAIL: string = 'email@email.com';
const PASSWORD: string = 'password';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;
    let authFacade: AuthFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPageComponent],
            imports: [ReactiveFormsModule, RouterTestingModule],
            providers: [{ provide: AuthFacade, useValue: { login: jest.fn() } }],
        });

        authFacade = TestBed.inject<AuthFacade>(AuthFacade);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('onSubmit', () => {
        test('should login user', () => {
            component.signinForm.get('email').setValue(EMAIL);
            component.signinForm.get('password').setValue(PASSWORD);

            component.onSubmit();

            expect(authFacade.login).toHaveBeenCalledWith({ email: EMAIL, password: PASSWORD });
        });

        test('should not login when form is invalid', () => {
            component.onSubmit();

            expect(component.signinForm.get('email').invalid).toBeTruthy();
            expect(component.signinForm.get('password').invalid).toBeTruthy();
            expect(authFacade.login).not.toHaveBeenCalled();
        });
    });
});
