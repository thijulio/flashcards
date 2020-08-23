import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPageComponent } from './about-page.component';

describe('AboutComponent', () => {
    let component: AboutPageComponent;
    let fixture: ComponentFixture<AboutPageComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [AboutPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('should create', () => {
        expect(component).toBeTruthy();
    });
});
