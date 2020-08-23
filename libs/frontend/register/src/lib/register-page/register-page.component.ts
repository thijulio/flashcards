import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateUserRequest } from '@flashcards/common/types';
import { AuthFacade } from '@flashcards/frontend/shared/auth';

@Component({
    selector: 'flashcards-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
    public signupForm: FormGroup = new FormGroup({
        name: new FormControl(null, Validators.required),
        surname: new FormControl(null, Validators.required),
        givenName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl('M'),
        password: new FormControl(null, Validators.required),
    });

    constructor(private readonly authFacade: AuthFacade) {}

    public onSubmit(): void {
        if (this.signupForm.invalid) {
            return;
        }

        const { givenName, name, surname, email, gender, password } = this.signupForm.value as CreateUserRequest;

        this.authFacade.register({ givenName, name, surname, email, gender, password });
    }
}
