import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftPanelToolbarComponent } from './left-panel-toolbar.component';

describe('LeftPanelToolbarComponent', () => {
    let component: LeftPanelToolbarComponent;
    let fixture: ComponentFixture<LeftPanelToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeftPanelToolbarComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeftPanelToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
