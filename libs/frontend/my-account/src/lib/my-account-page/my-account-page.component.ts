import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '@flashcards/frontend/shared/data';
@Component({
    selector: 'flashcards-my-account-page',
    templateUrl: './my-account-page.component.html',
    styleUrls: ['./my-account-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountPageComponent {
    constructor(private readonly userService: UserService) {}

    // public onSubmit(): void {
    // eslint-disable-next-line extra-rules/no-commented-out-code
    //     this.userService
    //         .profile()
    //         .pipe(tap(console.log)) // remove it
    //         .subscribe();
    // }
}
