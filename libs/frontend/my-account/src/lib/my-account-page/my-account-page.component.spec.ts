import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@flashcards/frontend/shared/data';
import { MyAccountPageComponent } from './my-account-page.component';

describe('MyAccountPageComponent', () => {
    let component: MyAccountPageComponent;
    let fixture: ComponentFixture<MyAccountPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MyAccountPageComponent],
            providers: [{ provide: UserService, useValue: { profile: jest.fn() } }],
        });

        fixture = TestBed.createComponent(MyAccountPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
