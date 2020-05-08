import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@flashcards/frontend/shared/data';

@Component({
    selector: 'flashcards-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent implements OnInit {
    public signupForm: FormGroup;

    constructor(private readonly accountService: AccountService) {}

    public ngOnInit(): void {
        this.signupForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            gender: new FormControl('male'),
        });
    }

    public onSubmit(): void {
        console.log(this.signupForm.value);

        const { username, email, gender } = this.signupForm.value;

        this.accountService.register({ username, email, gender, password: 'testpass', name: 'Name' }).subscribe();
    }
}
