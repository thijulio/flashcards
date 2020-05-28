import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { LayoutFacade } from '../../+state/facade/layout.facade';
import { LayoutFacadeStub } from '../../+state/facade/layout.facade.stub';
import { MaterialModule } from '../../material.module';
import { RightPanelToolbarComponent } from './right-panel-toolbar.component';

describe('RightPanelToolbarComponent', () => {
    let component: RightPanelToolbarComponent;
    let fixture: ComponentFixture<RightPanelToolbarComponent>;
    let layoutFacade: LayoutFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RightPanelToolbarComponent],
            imports: [MockModule(MaterialModule)],
            providers: [{ provide: LayoutFacade, useClass: LayoutFacadeStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(RightPanelToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        layoutFacade = TestBed.inject(LayoutFacade);
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle panel', () => {
        layoutFacade.toggleRightPanel = jest.fn();
        component.togglePanelSize();

        expect(layoutFacade.toggleRightPanel).toHaveBeenCalled();
    });
});
