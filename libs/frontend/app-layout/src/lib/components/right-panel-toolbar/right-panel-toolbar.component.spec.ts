import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { LayoutFacade } from '../../+state/facade/layout.facade';
import { MaterialModule } from '../../material.module';
import { RightPanelToolbarComponent } from './right-panel-toolbar.component';

describe('RightPanelToolbarComponent', () => {
    let component: RightPanelToolbarComponent;
    let fixture: ComponentFixture<RightPanelToolbarComponent>;
    let layoutFacade: LayoutFacade;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [RightPanelToolbarComponent],
            imports: [MockModule(MaterialModule)],
            providers: [{ provide: LayoutFacade, useValue: { toggleRightPanel: jest.fn() } }],
        }).compileComponents();

        fixture = TestBed.createComponent(RightPanelToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        layoutFacade = TestBed.inject(LayoutFacade);
    }));

    test('should create', () => {
        expect(component).toBeTruthy();
    });

    test('should toggle panel', () => {
        component.togglePanelSize();

        expect(layoutFacade.toggleRightPanel).toHaveBeenCalled();
    });
});
