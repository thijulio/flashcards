import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelToolbarComponent } from './right-panel-toolbar.component';

describe('RightPanelToolbarComponent', () => {
    let component: RightPanelToolbarComponent;
    let fixture: ComponentFixture<RightPanelToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RightPanelToolbarComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RightPanelToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
