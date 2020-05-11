import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFacade, AuthFacadeStub } from '@flashcards/frontend/shared/auth';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
    let component: RegisterPageComponent;
    let fixture: ComponentFixture<RegisterPageComponent>;
    let authFacade: AuthFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [RegisterPageComponent],
            providers: [{ provide: AuthFacade, useClass: AuthFacadeStub }],
        });

        authFacade = TestBed.inject(AuthFacade);
        authFacade.register = jest.fn();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should register the user', () => {
        const user = {
            name: 'name',
            surname: 'surname',
            givenName: 'givenName',
            email: 'email@email.com',
            gender: 'M',
            password: 'password',
        };

        component.signupForm.get('name').setValue(user.name);
        component.signupForm.get('surname').setValue(user.surname);
        component.signupForm.get('givenName').setValue(user.givenName);
        component.signupForm.get('email').setValue(user.email);
        component.signupForm.get('gender').setValue(user.gender);
        component.signupForm.get('password').setValue(user.password);

        component.onSubmit();

        expect(authFacade.register).toHaveBeenCalledWith(user);
    });

    it('should not register when form is invalid', () => {
        component.onSubmit();

        expect(component.signupForm.get('name').invalid).toBeTruthy();
        expect(component.signupForm.get('surname').invalid).toBeTruthy();
        expect(component.signupForm.get('givenName').invalid).toBeTruthy();
        expect(component.signupForm.get('email').invalid).toBeTruthy();
        expect(component.signupForm.get('password').invalid).toBeTruthy();
        expect(authFacade.register).not.toHaveBeenCalled();
    });
});
