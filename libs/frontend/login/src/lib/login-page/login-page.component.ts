import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '@flashcards/common/types';
import { AuthFacade } from '@flashcards/frontend/shared/auth';
import { Observable } from 'rxjs';

@Component({
    selector: 'flashcards-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
    public signinForm: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
    });

    public isUseLoggedIn$: Observable<boolean> = this.authFacade.isUseLoggedIn$;

    constructor(private readonly authFacade: AuthFacade) {}

    public onSubmit(): void {
        if (this.signinForm.invalid) {
            return;
        }

        const credentials = this.getFormValue();

        this.authFacade.login(credentials);
    }

    private getFormValue(): Credentials {
        return this.signinForm.value as Credentials;
    }
}
