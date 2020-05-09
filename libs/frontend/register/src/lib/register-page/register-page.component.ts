import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@flashcards/frontend/shared/auth';

@Component({
    selector: 'flashcards-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent implements OnInit {
    public signupForm: FormGroup;

    constructor(private readonly authFacade: AuthFacade) {}

    public ngOnInit(): void {
        this.signupForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            surname: new FormControl(null, Validators.required),
            givenName: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            gender: new FormControl('male'),
            password: new FormControl(null, Validators.required),
        });
    }

    public onSubmit(): void {
        const { givenName, name, surname, email, gender, password } = this.signupForm.value;

        this.authFacade.register({ givenName, name, surname, email, gender, password });
    }
}
