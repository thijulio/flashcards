import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@flashcards/shared/auth/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'flashcards-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
    public signinForm: FormGroup;

    public isUseLoggedIn$: Observable<boolean> = this.authFacade.isUseLoggedIn$;

    constructor(private readonly authFacade: AuthFacade) {}

    public ngOnInit(): void {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null),
        });
    }

    public onSubmit(): void {
        const { email, password } = this.signinForm.value;

        this.authFacade.login({ email, password });
    }

    public logout(): void {
        this.authFacade.logout();
    }
}
