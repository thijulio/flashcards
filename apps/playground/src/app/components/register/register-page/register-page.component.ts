import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

// tslint:disable-next-line: prefer-on-push-component-change-detection
@Component({
    selector: 'flashcards-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent implements OnInit {
    public signupForm: FormGroup;

    constructor(private cd: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.signupForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
            gender: new FormControl('male'),
            hobbies: new FormArray([]),
        });

        // this.signupForm.valueChanges.subscribe(value => {
        //     console.log(value);
        // });

        // this.signupForm.statusChanges.subscribe(status => {
        //     this.cd.markForCheck();
        // });
    }

    public onSubmit(): void {
        console.log(this.signupForm);
    }

    public addHobbie(): void {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    public getHobbieControls(): AbstractControl[] {
        return (<FormArray>this.signupForm.get('hobbies')).controls;
    }

    public forbiddenEmails(control: FormControl) {
        if (control.value === 'test@test.com') {
            return of({ emailIsForbidden: true }).pipe(delay(3000));
        } else {
            return of(null).pipe(delay(3000));
        }
    }
}
